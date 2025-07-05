# Comfort Designs - Modern Digital Solutions Website

A modern, full-stack website for Comfort Designs - a company specializing in Website Design & Development, Graphic Design, Digital Marketing Services, and Tech Gadgets.

## 🚀 Features

- **Modern Design**: Sleek, colorful, and responsive design
- **Full-Stack Application**: React frontend with Node.js/Express backend
- **Services Showcase**: Website Development, Graphic Design, Digital Marketing, Tech Gadgets
- **Interactive Portfolio**: Filterable project gallery
- **Contact System**: Functional contact form with email integration
- **Responsive Design**: Mobile-first approach, works on all devices
- **SEO Optimized**: Clean URLs, meta tags, and semantic HTML
- **Performance**: Fast loading with optimized assets
- **Animations**: Smooth transitions and micro-interactions

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern JavaScript library
- **React Router DOM** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Beautiful icon library
- **React Hot Toast** - Elegant notifications
- **Axios** - HTTP client for API requests
- **CSS3** - Modern styling with custom properties

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Nodemailer** - Email sending functionality
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## 📁 Project Structure

```
comfort-designs-website/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # CSS files
│   │   ├── utils/         # Utility functions
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
├── server.js              # Express server
├── package.json           # Backend dependencies
├── .env                   # Environment variables
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd comfort-designs-website
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   PORT=5000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   COMPANY_EMAIL=info@comfortdesigns.com
   ```

5. **Start the development servers**
   
   **Terminal 1 (Backend):**
   ```bash
   npm run dev
   ```
   
   **Terminal 2 (Frontend):**
   ```bash
   npm run client
   ```

6. **Access the website**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📧 Email Configuration

To enable the contact form functionality:

1. **Gmail Setup** (recommended):
   - Enable 2-factor authentication on your Gmail account
   - Generate an app-specific password
   - Use your Gmail address and app password in the `.env` file

2. **Other Email Services**:
   - Update the nodemailer configuration in `server.js`
   - Refer to nodemailer documentation for your email provider

## 🎨 Customization

### Logo Replacement
1. Replace the logo placeholder in `client/src/components/Navbar.js`
2. Add your logo image to `client/public/images/`
3. Update the logo references in components

### Content Updates
- **Services**: Edit the services array in `server.js`
- **Portfolio**: Update the portfolio data in `server.js`
- **Contact Info**: Modify contact details in `server.js` and components
- **Company Info**: Update company information throughout the codebase

### Styling
- **Colors**: Update CSS custom properties in `client/src/styles/index.css`
- **Fonts**: Modify font imports in `client/public/index.html`
- **Animations**: Customize Framer Motion animations in components

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deployment Options

#### Heroku
1. Install Heroku CLI
2. Create a new Heroku app
3. Set environment variables in Heroku dashboard
4. Deploy:
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

#### Netlify (Frontend) + Heroku (Backend)
1. Build and deploy frontend to Netlify
2. Deploy backend to Heroku
3. Update API endpoints in frontend

#### DigitalOcean/AWS/Azure
1. Set up a server instance
2. Install Node.js and PM2
3. Clone repository and install dependencies
4. Start with PM2: `pm2 start server.js`

## 📱 Pages & Features

### Home Page
- Hero section with animated elements
- Services overview
- Features showcase
- Statistics counter
- Client testimonials
- Call-to-action sections

### About Page
- Company story and mission
- Team members
- Values and approach

### Services Page
- Detailed service descriptions
- Feature lists and pricing
- Call-to-action buttons

### Portfolio Page
- Filterable project gallery
- Project categories
- Interactive project cards

### Contact Page
- Contact form with validation
- Company information
- Interactive map placeholder
- FAQ section

## 🔧 Available Scripts

### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run server` - Start server only

### Frontend Scripts
- `npm run client` - Start React development server
- `npm run build` - Build production React app
- `npm test` - Run tests

### Combined Scripts
- `npm run dev` - Start both backend and frontend in development mode

## 🎯 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML structure
- Fast loading times
- Mobile-responsive design
- Clean, SEO-friendly URLs

## 🔒 Security Features

- Environment variable protection
- CORS configuration
- Input validation on forms
- XSS protection
- Rate limiting (can be added)

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   kill -9 $(lsof -ti:5000)  # Kill process on port 5000
   kill -9 $(lsof -ti:3000)  # Kill process on port 3000
   ```

2. **Dependencies issues**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Email not sending**
   - Check email credentials in `.env`
   - Ensure app password is generated for Gmail
   - Check spam folder for test emails

## 📞 Support

For support and customization requests:
- Email: info@comfortdesigns.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Framer Motion for smooth animations
- React Icons for beautiful icons
- All the open-source contributors

---

**Built with ❤️ by Comfort Designs**
