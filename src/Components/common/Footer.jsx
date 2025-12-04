import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com/sanwiti' },
    { icon: <FaInstagram />, url: 'https://instagram.com/sanwiti' },
    { icon: <FaTwitter />, url: 'https://twitter.com/sanwiti' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com/company/sanwiti' },
    { icon: <FaYoutube />, url: 'https://youtube.com/@sanwiti' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/919876543210' },
  ];

  const quickLinks = ['Home', 'About', 'Services', 'Gallery', 'Contact', 'Help'];

  return (
    <footer className="bg-gray-800 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Branding & Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Sanwiti</h2>
            <p className="text-sm">
              Compassionate psychiatric care dedicated to empowering your mental wellness journey.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-sm">123, MG Road, Bangalore, Karnataka - 560001</p>
            <p className="text-sm mt-2">
              Phone: <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
            </p>
            <p className="text-sm mt-1">
              Email: <a href="mailto:contact@sanwiti.com" className="hover:text-white">contact@sanwiti.com</a>
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-xs">&copy; {new Date().getFullYear()} Sanwiti Psychiatry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
