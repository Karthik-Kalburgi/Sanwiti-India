import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-blue-600">
            Sanwiti
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {['Home', 'About', 'Services', 'Gallery', 'Contact', 'Help'].map((link) => (
              <NavLink
                key={link}
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-white bg-blue-600 px-3 py-2 rounded-md'
                      : 'text-gray-700 hover:text-blue-600'
                  }`
                }
              >
                {link}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseOutlined className="text-xl" /> : <MenuOutlined className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {['Home', 'About', 'Services', 'Gallery', 'Contact', 'Help'].map((link) => (
              <NavLink
                key={link}
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-white bg-blue-600 px-3 py-2 rounded-md'
                      : 'text-gray-700 hover:text-blue-600'
                  }`
                }
              >
                {link}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
