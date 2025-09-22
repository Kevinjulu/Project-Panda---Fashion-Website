# 🌟 Neon Kenya Fashion Website

A professional fashion designer portfolio website showcasing collections, modeling work, and design services by Neon Kenya.

![Fashion Designer Website](https://img.shields.io/badge/Fashion-Designer-ff6b9d?style=for-the-badge&logo=fashion&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853d?style=for-the-badge&logo=node.js&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-e34c26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572b6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)

## 🎯 Overview

This website represents the digital presence of Neon Kenya, a fashion designer and model specializing in unique collections that blend Kenyan culture with modern aesthetics. From runway to streetwear, each piece tells a story celebrating African fashion.

### 🌈 Featured Collections
- **Neon Nights** - Electric silhouettes for runway
- **Coastal Hues** - Ocean-inspired editorial pieces  
- **Matatu Vibes** - Vibrant urban streetwear
- **Couture Emerald Lines** - Handcrafted luxury pieces

## 🚀 Features

- **🎨 Portfolio Gallery** - Interactive filtering by collection type
- **📱 Responsive Design** - Mobile-first approach with glass morphism UI
- **🎪 Dynamic Animations** - Particle systems and smooth transitions
- **📬 Contact System** - Professional booking and consultation forms
- **🔧 Backend API** - Express.js server with database integration
- **⚡ Performance** - Optimized assets and fast loading times

## 🏗️ Project Structure

```
fashion-designer-website/
├── 📁 public/              # Static assets
│   └── images/             # SVG graphics and logos
├── 📁 server/              # Backend API
│   ├── server.js           # Express server
│   ├── db.js              # Database connection
│   ├── models/            # Data models
│   └── routes/            # API endpoints
├── 📁 src/                # Frontend source
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript modules
│   ├── contact.html       # Contact page
│   └── portfolio.html     # Portfolio page
├── index.html             # Homepage
├── about.html             # About page
├── package.json           # Dependencies & scripts
└── README.md             # Documentation
```

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with animations and glass morphism
- **JavaScript (ES6+)** - Interactive features and API integration
- **Canvas API** - Particle system animations

### Backend  
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - Database for contact forms and data
- **Mongoose** - MongoDB object modeling

### Development Tools
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **Nodemon** - Development server auto-reload
- **Live Server** - Frontend development server

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)
- MongoDB (local or cloud instance)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kevinjulu/Project-Panda---Fashion-Website.git
   cd fashion-designer-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Create .env file (see .env.example)
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development servers**
   ```bash
   # Backend server (API)
   npm run dev
   
   # Frontend server (in another terminal)
   npm run dev:frontend
   ```

5. **Open your browser**
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:3000

## 🚀 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start development server with auto-reload |
| `npm run dev:frontend` | Start frontend development server |
| `npm run build` | Build optimized production assets |
| `npm run test` | Run test suite |
| `npm run lint` | Check code quality |
| `npm run format` | Format code with Prettier |
| `npm run deploy` | Build and deploy to production |

## 🌍 API Endpoints

### Contact API
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check endpoint

### Payouts API  
- `GET /api/payouts` - Get payout information
- `POST /api/payouts` - Process payout requests

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

## 🔧 Configuration

### Environment Variables (.env)
```env
# Database
MONGODB_URI=mongodb://localhost:27017/fashion-website
DATABASE_NAME=fashion_website

# Server
PORT=3000
NODE_ENV=development

# Email (for contact forms)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 🚢 Deployment

### Production Build
```bash
npm run build
npm run deploy
```

### Deployment Platforms
- **Vercel** - Frontend hosting
- **Heroku** - Full-stack deployment  
- **Netlify** - Static site hosting
- **DigitalOcean** - VPS deployment

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Connect

- **Designer**: Neon Kenya
- **Email**: kevinjulu@gmail.com
- **GitHub**: [@Kevinjulu](https://github.com/Kevinjulu)
- **Portfolio**: [Visit Website](https://neon-kenya-fashion.vercel.app)

## 🙏 Acknowledgments

- Inspired by Kenyan matatu culture and coastal beauty
- Special thanks to the Nairobi fashion community
- Built with love for African fashion and design

---

⭐ **Star this repository if you love fashion and great web design!** ⭐