import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin, 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiArrowUp,
  FiClock
} from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const services = [
    'Website Design',
    'Web Development',
    'Graphic Design',
    'Digital Marketing',
    'Tech Gadgets',
    'Consultation'
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: FiFacebook, url: '#', label: 'Facebook' },
    { icon: FiTwitter, url: '#', label: 'Twitter' },
    { icon: FiInstagram, url: '#', label: 'Instagram' },
    { icon: FiLinkedin, url: '#', label: 'LinkedIn' }
  ];



  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <Link to="/" className="footer-brand">
                  <div className="logo-placeholder">
                    <span className="logo-text">Comfort</span>
                    <span className="logo-text-accent">Designs</span>
                  </div>
                </Link>
              </div>
              <p className="footer-description">
                Leading provider of modern digital solutions including Website Design & Development, 
                Graphic Design, Digital Marketing Services, and Tech Gadgets. We create beautiful, 
                functional designs that drive results.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-link"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link to="/services" className="footer-link">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-title">Contact Info</h4>
              <div className="contact-info">
                                 <div className="contact-item">
                   <FiMapPin className="contact-icon" />
                   <span>7 Elsley Road, Queens Park West, Bulawayo, Zimbabwe</span>
                 </div>
                 <div className="contact-item">
                   <FiPhone className="contact-icon" />
                   <span>+26377 282 4132</span>
                 </div>
                 <div className="contact-item">
                   <FiMail className="contact-icon" />
                   <span>comfort.designszw@gmail.com</span>
                 </div>
                 <div className="contact-item">
                   <FiClock className="contact-icon" />
                   <span>Mon - Sat: 8AM - 6PM | Closed Sundays</span>
                 </div>
              </div>
              
              {/* Newsletter */}
              <div className="newsletter">
                <h5>Subscribe to Our Newsletter</h5>
                <form className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Comfort Designs. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-to-top"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;