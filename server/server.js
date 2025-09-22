const path = require('node:path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const morgan = require('morgan');
require('dotenv').config();
require('./db');
require('./models/User'); // Initialize User model

const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdn.jsdelivr.net"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdn.jsdelivr.net"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'"]
    }
  },
  crossOriginEmbedderPolicy: false
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit contact form submissions
  message: 'Too many contact submissions, please try again later.',
  standardHeaders: true,
  legacyHeaders: false
});

app.use(limiter);

// Performance middleware
app.use(compression());
app.use(morgan('combined'));

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] 
    : ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Cache middleware for static files
const setCache = (req, res, next) => {
  if (req.url.match(/\.(css|js|png|jpg|jpeg|gif|ico|svg)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
  } else {
    res.setHeader('Cache-Control', 'public, max-age=3600'); // 1 hour for HTML
  }
  next();
};

// Serve static files with caching
app.use(express.static(path.join(__dirname, '..'), setCache));
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'images'), setCache));
app.use(express.static(path.join(__dirname, '..', 'src'), setCache));

// API routes with appropriate rate limiting
app.get('/api/health', (req, res) => res.json({ 
  ok: true, 
  timestamp: new Date().toISOString(),
  environment: process.env.NODE_ENV || 'development'
}));

// Authentication routes
const { router: authRouter, authenticateToken } = require('./routes/auth');
app.use('/api/auth', authRouter);

// Apply stricter rate limiting to contact form
app.use('/api/contact', contactLimiter, require('./routes/contact'));
app.use('/api/contacts', authenticateToken, require('./routes/contacts')); // Protected admin route
app.use('/api/payouts', require('./routes/payouts'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { details: err.message })
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log(`API server running on http://localhost:${PORT}`);
});
