# 🌟 Neon Kenya Fashion Website - IMPROVED

A professional fashion designer and model website featuring a modern neon aesthetic, built with Node.js, Express, and SQLite.

## 🚀 **RECENT IMPROVEMENTS** (Latest Update)

### ✅ **Critical Bug Fixes**
- Fixed SQLite3 dependency issue
- Resolved module system mismatch (CommonJS/ES)
- Standardized navigation paths across all pages
- Fixed asset path inconsistencies

### 🔒 **Security Enhancements**
- Added comprehensive input validation with express-validator
- Implemented Helmet.js security headers
- Added rate limiting for API endpoints (stricter for contact form)
- Configured CORS properly with environment-specific origins
- Added request sanitization and XSS protection

### ⚡ **Performance Optimizations**
- Implemented gzip compression
- Added intelligent caching headers (1 year for assets, 1 hour for HTML)
- Added proper error handling and logging
- Optimized static file serving

### ✨ **New Features**
1. **Admin Dashboard** (`/admin.html`)
   - View all contact submissions with statistics
   - Real-time data refresh
   - Service-specific analytics
   - Professional UI with loading states

2. **User Authentication System**
   - JWT-based authentication
   - Secure password hashing with bcryptjs
   - Role-based access control
   - Protected admin routes
   - Default admin account (username: `admin`, password: `admin123`)

3. **Enhanced Contact System**
   - Server-side validation
   - Protected admin endpoints
   - Better error handling
   - Improved user feedback

### 🔧 **Development Workflow**
- ESLint configuration for code quality
- Environment configuration support
- Improved npm scripts
- Better project structure

## 📋 **Setup Instructions**

### Prerequisites
- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/Kevinjulu/Project-Panda---Fashion-Website.git
   cd Project-Panda---Fashion-Website
   ```

2. **Install dependencies**
   ```bash
   # Note: If you get PowerShell execution policy errors on Windows:
   # Run: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   # Or run: node server/server.js directly
   
   npm install
   ```

3. **Environment Setup** (Optional)
   ```bash
   # Copy environment template
   cp .env.example .env
   
   # Edit .env file with your settings
   # Especially change JWT_SECRET in production
   ```

4. **Start the server**
   ```bash
   # Development mode with auto-restart
   npm run dev
   
   # Or production mode
   npm start
   
   # Or run directly
   node server/server.js
   ```

5. **Access the application**
   - Main website: http://localhost:3000
   - Admin dashboard: http://localhost:3000/admin.html
   - Login page: http://localhost:3000/login.html

## 🔐 **Authentication**

### Default Admin Account
- **Username:** `admin`
- **Password:** `admin123`
- **⚠️ Important:** Change this password in production!

### API Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user info
- `GET /api/contacts` - Get all contacts (admin only)
- `POST /api/contact` - Submit contact form

## 🏗️ **Architecture**

### Frontend
- **Static HTML/CSS/JS** served from Express
- **Responsive design** with mobile-first approach
- **Neon aesthetic** with particles background
- **Modern ES6+ JavaScript** with modules

### Backend
- **Express.js** server with comprehensive middleware
- **SQLite** database for contacts and users
- **JWT authentication** for secure sessions
- **Rate limiting** and security headers
- **Input validation** and sanitization

### Security Features
- Helmet.js security headers
- CORS configuration
- Rate limiting (100 req/15min general, 5 req/15min for contact form)
- Input validation and sanitization
- Password hashing with bcryptjs
- JWT token authentication
- SQL injection protection

### Performance Features
- Gzip compression
- Intelligent caching headers
- Request logging with Morgan
- Optimized static file serving

## 📁 **Project Structure**
```
/
├── server/                 # Backend server
│   ├── models/            # Database models
│   │   ├── Contact.js     # Contact form model
│   │   └── User.js        # User authentication model
│   ├── routes/            # API routes
│   │   ├── contact.js     # Contact form submission
│   │   ├── contacts.js    # Admin contact retrieval
│   │   ├── auth.js        # Authentication routes
│   │   └── payouts.js     # Demo payouts data
│   ├── db.js             # Database connection
│   └── server.js         # Main server file
├── src/                   # Frontend source
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript modules
│   └── *.html            # Page templates
├── public/                # Static assets
│   └── images/           # Image files
├── *.html                # Main pages (served at root)
├── admin.html            # Admin dashboard
├── login.html            # Login page
└── package.json          # Dependencies and scripts
```

## 🧪 **Testing**

### Manual Testing Checklist
- [ ] Homepage loads correctly
- [ ] Navigation works between all pages
- [ ] Contact form submits successfully
- [ ] Portfolio filtering works
- [ ] Particles animation runs smoothly
- [ ] Admin login works
- [ ] Admin dashboard shows contacts
- [ ] Rate limiting prevents spam
- [ ] Responsive design works on mobile

### API Testing
```bash
# Test health endpoint
curl http://localhost:3000/api/health

# Test login (replace with actual credentials)
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test protected route (replace TOKEN with actual JWT)
curl -H "Authorization: Bearer TOKEN" \
  http://localhost:3000/api/contacts
```

## 🚀 **Deployment**

### Production Checklist
- [ ] Change default admin password
- [ ] Set secure JWT_SECRET environment variable
- [ ] Configure proper CORS origins
- [ ] Set NODE_ENV=production
- [ ] Configure HTTPS
- [ ] Set up database backups
- [ ] Configure logging

### Environment Variables
```env
NODE_ENV=production
PORT=3000
JWT_SECRET=your-super-secure-secret-here
CORS_ORIGINS=https://yourdomain.com
```

## 🛠️ **Development Commands**

```bash
# Start development server with auto-restart
npm run dev

# Start production server
npm start

# Run linting
npm run lint
npm run lint:fix

# Format code
npm run format

# Build for production
npm run build
```

## 🔄 **Recent Changes**

### v2.0.0 - Major Security & Feature Update
- Complete security overhaul
- Added user authentication system
- Created admin dashboard
- Fixed all critical path issues
- Added comprehensive validation
- Improved performance significantly

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 **License**

MIT License - see package.json for details

---

## 🆘 **Troubleshooting**

### Common Issues

**PowerShell execution policy error:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Database doesn't initialize:**
- Check if server/data.db file exists
- Restart the server to trigger initialization

**Admin login doesn't work:**
- Check if users table was created
- Look for "Default admin user created" in console logs
- Use credentials: admin / admin123

**Assets not loading:**
- Check if public/images directory exists
- Verify server is serving static files correctly

For more help, check the logs or create an issue on GitHub.

---

## ⭐ **Features Highlight**

- 🎨 **Professional Design** - Modern neon aesthetic
- 🔐 **Secure Authentication** - JWT-based login system  
- 📊 **Admin Dashboard** - Contact management interface
- 🛡️ **Security First** - Rate limiting, validation, headers
- ⚡ **Fast Performance** - Caching, compression, optimization
- 📱 **Responsive Design** - Mobile-friendly interface
- 🎭 **Interactive UI** - Smooth animations and transitions

This is now a production-ready fashion designer website with enterprise-level security and features!