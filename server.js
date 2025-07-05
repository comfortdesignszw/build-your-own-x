const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Routes
// Contact form route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    
    // Create transporter for sending emails
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.COMPANY_EMAIL || 'info@comfortdesigns.com',
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.json({ success: true, message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
});

// Services data route
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      title: 'Website Design & Development',
      description: 'Modern, responsive websites built with cutting-edge technologies',
      icon: '💻',
      features: ['Responsive Design', 'Custom Development', 'SEO Optimization', 'E-commerce Solutions'],
      price: 'Starting from $999'
    },
    {
      id: 2,
      title: 'Graphic Design',
      description: 'Creative visual solutions for your brand identity and marketing materials',
      icon: '🎨',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Digital Graphics'],
      price: 'Starting from $299'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence',
      icon: '📱',
      features: ['Social Media Marketing', 'Content Creation', 'PPC Advertising', 'Analytics & Reporting'],
      price: 'Starting from $599/month'
    },
    {
      id: 4,
      title: 'Tech Gadgets',
      description: 'Latest electronic devices and accessories for modern living',
      icon: '🔌',
      features: ['Smart Home Devices', 'Mobile Accessories', 'Gaming Equipment', 'Audio/Video Systems'],
      price: 'Competitive Pricing'
    }
  ];
  
  res.json(services);
});

// Portfolio data route
app.get('/api/portfolio', (req, res) => {
  const portfolio = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: '/images/portfolio/ecommerce.jpg',
      description: 'Modern e-commerce platform with advanced features'
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      image: '/images/portfolio/branding.jpg',
      description: 'Complete brand identity package for tech startup'
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      category: 'Digital Marketing',
      image: '/images/portfolio/social-media.jpg',
      description: 'Successful social media campaign increasing engagement by 300%'
    },
    {
      id: 4,
      title: 'Smart Home Setup',
      category: 'Tech Gadgets',
      image: '/images/portfolio/smart-home.jpg',
      description: 'Complete smart home automation solution'
    }
  ];
  
  res.json(portfolio);
});

// Newsletter subscription route
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Here you would typically save to database
    // For now, just send a confirmation email
    
    res.json({ success: true, message: 'Successfully subscribed to newsletter!' });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    res.status(500).json({ success: false, message: 'Failed to subscribe. Please try again.' });
  }
});

// Catch all handler: send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌟 Comfort Designs website is live!`);
});