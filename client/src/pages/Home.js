import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiArrowRight, 
  FiCode, 
  FiPalette, 
  FiTrendingUp, 
  FiSmartphone,
  FiStar,
  FiUsers,
  FiAward,
  FiCheckCircle
} from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    rating: 0
  });

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      // Animate counter numbers
      const timer = setInterval(() => {
        setStats(prev => ({
          projects: prev.projects < 150 ? prev.projects + 2 : 150,
          clients: prev.clients < 200 ? prev.clients + 3 : 200,
          awards: prev.awards < 25 ? prev.awards + 1 : 25,
          rating: prev.rating < 4.9 ? Math.min(prev.rating + 0.1, 4.9) : 4.9
        }));
      }, 30);

      return () => clearInterval(timer);
    }
  }, [inView]);

  const services = [
    {
      icon: FiCode,
      title: 'Website Design & Development',
      description: 'Modern, responsive websites built with cutting-edge technologies',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: FiPalette,
      title: 'Graphic Design',
      description: 'Creative visual solutions for your brand identity and marketing',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive strategies to grow your online presence',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: FiSmartphone,
      title: 'Tech Gadgets',
      description: 'Latest electronic devices and accessories for modern living',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const features = [
    'Modern & Responsive Design',
    'SEO Optimized',
    'Fast Loading Speed',
    'Mobile-First Approach',
    '24/7 Support',
    'Custom Solutions'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Comfort Designs transformed our digital presence completely. Their attention to detail and creative approach exceeded our expectations.',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, InnovateLab',
      content: 'Outstanding service! The team delivered a beautiful website that perfectly represents our brand. Highly recommended.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emma Williams',
      role: 'Marketing Director, GrowthCo',
      content: 'Their digital marketing strategies increased our online engagement by 300%. Professional and results-driven team.',
      avatar: '👩‍💼'
    }
  ];

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-patterns"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="hero-title">
                Modern Digital Solutions for
                <span className="gradient-text"> Your Business</span>
              </h1>
              <p className="hero-description">
                We create stunning websites, powerful digital marketing campaigns, 
                beautiful graphic designs, and provide cutting-edge tech gadgets 
                to help your business thrive in the digital age.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Get Started Today
                  <FiArrowRight className="btn-icon" />
                </Link>
                <Link to="/portfolio" className="btn btn-outline">
                  View Our Work
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="hero-visual"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="hero-image">
                <div className="floating-cards">
                  <div className="floating-card card-1">
                    <FiCode size={24} />
                    <span>Web Dev</span>
                  </div>
                  <div className="floating-card card-2">
                    <FiPalette size={24} />
                    <span>Design</span>
                  </div>
                  <div className="floating-card card-3">
                    <FiTrendingUp size={24} />
                    <span>Marketing</span>
                  </div>
                  <div className="floating-card card-4">
                    <FiSmartphone size={24} />
                    <span>Tech</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Services</h2>
            <p>Comprehensive digital solutions tailored to your needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`service-icon bg-gradient-to-r ${service.color}`}>
                  <service.icon size={32} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="service-link">
                  Learn More <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section bg-gray">
        <div className="container">
          <div className="features-content">
            <div className="features-text">
              <h2>Why Choose Comfort Designs?</h2>
              <p>
                We combine creativity with technology to deliver exceptional 
                results that drive your business forward.
              </p>
              <div className="features-list">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-item"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FiCheckCircle className="feature-icon" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="features-visual">
              <div className="features-image">
                <div className="feature-badge badge-1">
                  <FiAward size={20} />
                  <span>Award Winning</span>
                </div>
                <div className="feature-badge badge-2">
                  <FiUsers size={20} />
                  <span>200+ Clients</span>
                </div>
                <div className="feature-badge badge-3">
                  <FiStar size={20} />
                  <span>5-Star Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section" ref={ref}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{stats.projects}+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.clients}+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.awards}+</div>
              <div className="stat-label">Awards Won</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.rating.toFixed(1)}</div>
              <div className="stat-label">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-header text-center">
            <h2>What Our Clients Say</h2>
            <p>Real feedback from real clients who love our work</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-content">
                  <p>"{testimonial.content}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section bg-primary">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="text-white">Ready to Transform Your Digital Presence?</h2>
            <p className="text-white">
              Let's work together to create something amazing for your business
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-secondary">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="btn btn-outline">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;