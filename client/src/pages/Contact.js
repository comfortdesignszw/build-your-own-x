import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock, 
  FiSend,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('/api/contact', formData);
      toast.success('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Our Location',
      content: '123 Business Street, City, State 12345',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: FiPhone,
      title: 'Phone Number',
      content: '+1 (555) 123-4567',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: FiMail,
      title: 'Email Address',
      content: 'info@comfortdesigns.com',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9AM - 6PM\nSat: 10AM - 4PM',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const services = [
    'Website Design & Development',
    'Graphic Design',
    'Digital Marketing',
    'Tech Gadgets',
    'Consultation',
    'Other'
  ];

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <motion.div
              className="contact-hero-text"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1>Get In Touch</h1>
              <p>
                Ready to start your next project? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="contact-form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you soon</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <div className="form-field">
                    <FiUser className="field-icon" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-field">
                    <FiMail className="field-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-field">
                    <FiPhone className="field-icon" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select a Service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <div className="form-field">
                    <FiMessageSquare className="field-icon" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="form-textarea"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="btn-icon" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="contact-info-container"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="contact-info-header">
                <h2>Contact Information</h2>
                <p>Get in touch with us through any of these channels</p>
              </div>

              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-info-card"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className={`contact-info-icon bg-gradient-to-r ${info.color}`}>
                      <info.icon size={24} />
                    </div>
                    <div className="contact-info-content">
                      <h3>{info.title}</h3>
                      <p>{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="map-container">
                <div className="map-placeholder">
                  <FiMapPin size={48} />
                  <p>Interactive Map Coming Soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq section bg-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our services</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does it take to complete a project?</h3>
              <p>Project timelines vary depending on complexity. A typical website takes 2-4 weeks, while graphic design projects can be completed in 1-2 weeks.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer ongoing support?</h3>
              <p>Yes! We provide 24/7 support and maintenance for all our web development projects. Our team is always ready to help.</p>
            </div>
            <div className="faq-item">
              <h3>What's included in your digital marketing services?</h3>
              <p>Our digital marketing services include social media management, content creation, PPC advertising, SEO optimization, and detailed analytics reporting.</p>
            </div>
            <div className="faq-item">
              <h3>Can you work with my existing brand?</h3>
              <p>Absolutely! We can work with your existing brand guidelines or help you create a new brand identity from scratch.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;