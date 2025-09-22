# 🌟 Neon Kenya Fashion Website - **PRODUCTION READY**

A professional fashion designer and model website featuring enterprise-level security, admin dashboard, and modern architecture. Built with Node.js, Express, and SQLite.

![Fashion Designer Website](https://img.shields.io/badge/Fashion-Designer-ff6b9d?style=for-the-badge&logo=fashion&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853d?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405e?style=for-the-badge&logo=sqlite&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Security](https://img.shields.io/badge/Security-Enterprise-red?style=for-the-badge&logo=security&logoColor=white)

## 🚀 **MAJOR UPDATE - v2.0.0**

**🎉 This website has been completely transformed into a production-ready, enterprise-level application with:**
- **🔐 JWT Authentication System** with secure login/logout
- **📊 Professional Admin Dashboard** with real-time analytics
- **🛡️ Enterprise Security** - Rate limiting, validation, security headers
- **⚡ High Performance** - Compression, caching, optimization
- **🔧 Complete Development Workflow** - ESLint, Prettier, documentation

## 🎯 Overview

This website represents the digital presence of Neon Kenya, a fashion designer and model specializing in unique collections that blend Kenyan culture with modern aesthetics. **Now featuring a complete admin system for managing contacts and user authentication.**

### 🌈 Featured Collections
- **Neon Nights** - Electric silhouettes for runway
- **Coastal Hues** - Ocean-inspired editorial pieces  
- **Matatu Vibes** - Vibrant urban streetwear
- **Couture Emerald Lines** - Handcrafted luxury pieces

## ✨ **NEW ENTERPRISE FEATURES**

### 🔐 **Authentication System**
- **JWT-based login/logout** with secure token management
- **Role-based access control** (admin/user roles)
- **Secure password hashing** with bcryptjs
- **Protected admin routes** with middleware authentication
- **Default admin account**: username: `admin`, password: `admin123`

### 📊 **Admin Dashboard** (`/admin.html`)
- **Real-time contact submissions** with professional UI
- **Statistics dashboard** - total contacts, monthly stats, popular services
- **Service-specific analytics** with color-coded badges
- **Professional loading states** and error handling
- **Responsive design** for mobile admin access

### 🛡️ **Enterprise Security**
- **Rate limiting** - 100 requests/15min (general), 5 requests/15min (contact form)
- **Helmet.js security headers** with Content Security Policy
- **Input validation & sanitization** with express-validator
- **CORS configuration** with environment-specific origins
- **SQL injection protection** with parameterized queries
- **XSS protection** with request sanitization

### ⚡ **Performance & Quality**
- **Gzip compression** for all responses
- **Intelligent caching** - 1 year for assets, 1 hour for HTML
- **Request logging** with Morgan
- **ESLint & Prettier** configuration for code quality
- **Comprehensive error handling** with proper logging

## 🎨 **Core Features**

- **🎨 Portfolio Gallery** - Interactive filtering by collection type
- **📱 Responsive Design** - Mobile-first approach with glass morphism UI
- **🎪 Dynamic Animations** - Particle systems and smooth transitions
- **📬 Enhanced Contact System** - Professional booking with validation
- **🔧 Robust Backend API** - Express.js server with SQLite database
- **⚡ Optimized Performance** - Caching, compression, and optimization

## 🏢 **Updated Project Structure**

```
fashion-designer-website/
├── 📁 server/                 # Backend server
│   ├── 📁 models/            # Database models
│   │   ├── Contact.js     # Contact form model
│   │   └── User.js        # 🆕 User authentication model
│   ├── 📁 routes/            # API routes
│   │   ├── contact.js     # Contact form submission
│   │   ├── contacts.js    # 🆕 Admin contact retrieval
│   │   ├── auth.js        # 🆕 Authentication routes
│   │   └── payouts.js     # Demo payouts data
│   ├── db.js              # SQLite database connection
│   ├── server.js          # 🔄 Enhanced Express server
│   └── data.db            # 🆕 SQLite database file
├── 📁 src/                   # Frontend source
│   ├── 📁 css/              # Stylesheets
│   │   ├── styles.css     # Main styles
│   │   ├── components.css # Component styles
│   │   └── animations.css # Animation styles
│   ├── 📁 js/               # JavaScript modules
│   │   ├── main.js        # Main application logic
│   │   ├── particles.js   # Particle animations
│   │   └── notifications.js # Social proof notifications
│   ├── contact.html       # Contact page template
│   ├── portfolio.html     # Portfolio page template
│   └── index.html         # Homepage template
├── 📁 public/                # Static assets
│   └── 📁 images/           # SVG graphics and logos
├── index.html             # 🔄 Main homepage
├── portfolio.html         # 🆕 Portfolio page (root level)
├── contact.html           # 🆕 Contact page (root level)
├── admin.html             # 🆕 Admin dashboard
├── login.html             # 🆕 Login page
├── about.html             # About page
├── .eslintrc.js           # 🆕 ESLint configuration
├── .eslintrc.json         # 🆕 Enhanced ESLint config
├── .prettierrc            # 🆕 Prettier configuration
├── package.json           # 🔄 Updated dependencies & scripts
├── README.md             # 🔄 This documentation
└── README-IMPROVED.md     # 🆕 Detailed technical docs

🆕 = New files/features
🔄 = Updated/enhanced files
```

## 🛠️ **Updated Technology Stack**

### Frontend
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with animations and glass morphism
- **JavaScript (ES6+)** - Interactive features and API integration
- **Canvas API** - Particle system animations
- **RemixIcon** - Professional icon library

### Backend (🆕 **Completely Enhanced**)
- **Node.js** - Runtime environment
- **Express.js** - Web application framework with security middleware
- **SQLite** - 🆕 Lightweight database for production readiness
- **bcryptjs** - 🆕 Secure password hashing
- **jsonwebtoken** - 🆕 JWT authentication
- **express-validator** - 🆕 Input validation and sanitization
- **helmet** - 🆕 Security headers middleware
- **express-rate-limit** - 🆕 API rate limiting
- **compression** - 🆕 Gzip response compression
- **morgan** - 🆕 HTTP request logging
- **cors** - 🆕 Cross-origin resource sharing

### Security Features (🆕 **Enterprise Level**)
- **JWT Authentication** - Secure token-based authentication
- **Rate Limiting** - Prevent spam and DDoS attacks
- **Input Validation** - Server-side data validation
- **SQL Injection Protection** - Parameterized queries
- **XSS Protection** - Request sanitization
- **Security Headers** - Helmet.js middleware
- **CORS Configuration** - Environment-specific origins

### Development Tools (🔄 **Enhanced**)
- **ESLint** - 🔄 Enhanced code linting and quality
- **Prettier** - 🆕 Code formatting standards
- **Nodemon** - Development server auto-reload
- **PostCSS** - CSS processing and optimization
- **Environment Configuration** - 🆕 .env support

## 📦 **Updated Installation Guide**

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v8 or higher)
- **🆕 SQLite** (included with Node.js - no separate installation needed)

### 🚀 **Quick Start** (Production Ready)

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kevinjulu/Project-Panda---Fashion-Website.git
   cd fashion-designer-website
   ```

2. **Install dependencies**
   ```bash
   # Note: On Windows with PowerShell execution policy errors:
   # Run: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   # Or run directly: node server/server.js
   
   npm install
   ```

3. **🆕 Environment Setup** (Optional)
   ```bash
   # Copy environment template
   cp .env.example .env
   
   # Edit .env with your settings
   # Especially change JWT_SECRET in production!
   ```

4. **🆕 Start the unified server**
   ```bash
   # Development mode with auto-restart
   npm run dev
   
   # OR production mode
   npm start
   
   # OR run directly
   node server/server.js
   ```

5. **🎉 Access the application**
   - **Main Website**: http://localhost:3000
   - **🆕 Admin Dashboard**: http://localhost:3000/admin.html
   - **🆕 Login Page**: http://localhost:3000/login.html

6. **🆕 Default Admin Access**
   - **Username**: `admin`
   - **Password**: `admin123`
   - **⚠️ Important**: Change this password in production!

## 🚀 **Updated Available Scripts**

| Script | Description | Status |
|--------|-------------|--------|
| `npm start` | Start production server | ✅ |
| `npm run dev` | Start development server with auto-reload | ✅ |
| `npm run dev:frontend` | Start frontend development server | ✅ |
| `npm run build` | Build optimized production assets | ✅ |
| `npm run build:css` | 🆕 Build CSS with PostCSS | ✅ |
| `npm run build:js` | 🆕 Build JS with ESBuild | ✅ |
| `npm run test` | Run test suite | ✅ |
| `npm run lint` | 🔄 Enhanced code quality check | ✅ |
| `npm run lint:fix` | 🆕 Auto-fix linting issues | ✅ |
| `npm run format` | 🆕 Format code with Prettier | ✅ |
| `npm run deploy` | Build and deploy to production | ✅ |
| `npm run generate:og` | 🆕 Generate OG images | ✅ |

## 🌍 **Enhanced API Endpoints**

### 🆕 **Authentication API** (New)
- `POST /api/auth/login` - User login with JWT
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user info (protected)

### Contact API (🔄 Enhanced)
- `POST /api/contact` - 🔄 Submit contact form (with validation & rate limiting)
- `GET /api/contacts` - 🆕 Get all contacts (admin only, protected)
- `GET /api/health` - 🔄 Enhanced health check with environment info

### Demo APIs
- `GET /api/payouts` - Get demo payout information

### 🛡️ **Security Features**
- **Rate Limiting**: 100 req/15min (general), 5 req/15min (contact)
- **Authentication**: JWT Bearer token required for protected routes
- **Validation**: All inputs validated and sanitized
- **CORS**: Environment-specific origin restrictions
- **Security Headers**: CSP, HSTS, and other security headers

## 🎨 Design System

The website features a modern design system with:
- **Glass Morphism** - Translucent cards with backdrop blur
- **Neon Accents** - Vibrant colors inspired by Kenyan culture
- **Typography** - Inter, Manrope, and Poppins font stack
- **Animations** - Smooth transitions and particle effects
- **Mobile-First** - Responsive design for all devices

## 📱 Responsive Breakpoints

```css
/* Mobile First */
320px   - Small phones
768px   - Tablets  
1024px  - Small desktops
1200px  - Large desktops
1440px  - Extra large screens
```

## 🔧 **Updated Configuration**

### 🆕 **Environment Variables (.env)**
```env
# Environment
NODE_ENV=development
PORT=3000

# 🆕 Security (REQUIRED in production)
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# 🆕 Database
DB_PATH=server/data.db

# 🆕 CORS Origins (comma separated)
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000

# 🆕 Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
CONTACT_RATE_LIMIT_MAX=5
```

## 🧪 **Testing & Quality Assurance**

### 🆕 **Manual Testing Checklist**
- ✅ Homepage loads correctly with particles animation
- ✅ Navigation works between all pages
- ✅ Contact form submits successfully with validation
- ✅ Portfolio filtering works properly
- ✅ Admin login works with default credentials
- ✅ Admin dashboard shows contacts and statistics
- ✅ Rate limiting prevents spam attempts
- ✅ Responsive design works on mobile devices
- ✅ Security headers are properly set
- ✅ Authentication protects admin routes

### 🆕 **API Testing Examples**
```bash
# Test health endpoint
curl http://localhost:3000/api/health

# Test login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test protected route (replace TOKEN with actual JWT)
curl -H "Authorization: Bearer TOKEN" \
  http://localhost:3000/api/contacts
```

### Automated Testing
```bash
# Run all tests
npm test

# Run linting
npm run lint

# Format code
npm run format
```

## 🚢 **Production Deployment**

### 🆕 **Production Checklist**
- ☐ Change default admin password
- ☐ Set secure JWT_SECRET environment variable
- ☐ Configure proper CORS origins
- ☐ Set NODE_ENV=production
- ☐ Configure HTTPS
- ☐ Set up database backups
- ☐ Configure logging and monitoring

### Production Build & Deploy
```bash
npm run build
npm run deploy
```

### 🆕 **Recommended Deployment Platforms**
- **Railway** - Full-stack deployment with SQLite
- **Render** - Full-stack deployment
- **Heroku** - Full-stack deployment  
- **DigitalOcean** - VPS deployment
- **Vercel** - Frontend hosting (API routes supported)
- **Netlify** - Static site hosting

## 🔄 **Recent Changes - v2.0.0**

### 🆕 **Major Security & Feature Update**
- Complete security overhaul with enterprise-level features
- Added user authentication system with JWT
- Created professional admin dashboard
- Fixed all critical path and dependency issues
- Added comprehensive input validation
- Improved performance significantly

### 🆕 **Breaking Changes**
- Server now requires SQLite3, bcryptjs, jsonwebtoken dependencies
- Admin routes now protected with authentication
- Module system changed from ES modules to CommonJS
- Database changed from MongoDB to SQLite

## 👍 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the ESLint and Prettier configurations
4. Run tests and linting: `npm run lint && npm test`
5. Commit changes (`git commit -m 'Add amazing feature'`)
6. Push to branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 🔷 **Troubleshooting**

### Common Issues

**PowerShell execution policy error:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Database doesn't initialize:**
- Check if `server/data.db` file exists
- Restart the server to trigger initialization
- Look for "Default admin user created" in console logs

**Admin login doesn't work:**
- Use credentials: admin / admin123
- Check browser console for errors
- Verify server is running on correct port

**Assets not loading:**
- Check if `public/images/` directory exists
- Verify server is serving static files correctly
- Clear browser cache

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 **Connect**

- **Designer**: Neon Kenya
- **Developer**: Kevin Julu
- **Email**: kevinjulu@gmail.com
- **GitHub**: [@Kevinjulu](https://github.com/Kevinjulu)
- **Repository**: [Project Panda Fashion Website](https://github.com/Kevinjulu/Project-Panda---Fashion-Website)

## 🙏 **Acknowledgments**

- Inspired by Kenyan matatu culture and coastal beauty
- Special thanks to the Nairobi fashion community
- Built with love for African fashion and design
- Enhanced with modern web security and development practices

---

## ⭐ **Features Highlight**

- 🎨 **Professional Design** - Modern neon aesthetic with glass morphism
- 🔐 **Secure Authentication** - JWT-based login system with role management
- 📊 **Admin Dashboard** - Real-time contact management interface
- 🛡️ **Security First** - Rate limiting, validation, security headers
- ⚡ **Fast Performance** - Caching, compression, optimization
- 📱 **Responsive Design** - Mobile-friendly interface
- 🎭 **Interactive UI** - Smooth animations and transitions

**This is now a production-ready fashion designer website with enterprise-level security and features!**

⭐ **Star this repository if you love fashion, security, and great web design!** ⭐
