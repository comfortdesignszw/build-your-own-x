import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiTarget, FiHeart } from 'react-icons/fi';

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="about-hero bg-primary">
        <div className="container">
          <div className="about-hero-content text-center">
            <motion.h1
              className="text-white"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Comfort Designs
            </motion.h1>
            <motion.p
              className="text-white"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We are passionate about creating digital experiences that make a difference
            </motion.p>
          </div>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="grid grid-2">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, Comfort Designs has been at the forefront of digital innovation, 
                helping businesses transform their online presence through cutting-edge design and technology.
              </p>
              <p>
                Our team of skilled professionals combines creativity with technical expertise to deliver 
                exceptional results that exceed client expectations.
              </p>
            </div>
            <div className="about-values">
              <div className="value-item">
                <FiTarget className="value-icon" />
                <h3>Our Mission</h3>
                <p>To provide innovative digital solutions that help businesses thrive in the digital age.</p>
              </div>
              <div className="value-item">
                <FiHeart className="value-icon" />
                <h3>Our Values</h3>
                <p>Quality, creativity, and customer satisfaction are at the heart of everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team section bg-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2>Meet Our Team</h2>
            <p>The creative minds behind our success</p>
          </div>
          <div className="team-grid grid-3">
            <div className="team-member card">
              <div className="member-avatar">👨‍💼</div>
              <h3>John Smith</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member card">
              <div className="member-avatar">👩‍💻</div>
              <h3>Sarah Johnson</h3>
              <p>Lead Designer</p>
            </div>
            <div className="team-member card">
              <div className="member-avatar">👨‍💻</div>
              <h3>Mike Chen</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;