import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';

// Fix Leaflet default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Contact = () => {
  const bangalorePosition = [12.9716, 77.5946];

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-2xl sm:text-3xl" />,
      title: 'Phone',
      detail: '+91 98765 43210',
      subDetail: '+91 80 2345 6789',
      link: 'tel:+919876543210',
    },
    {
      icon: <FaEnvelope className="text-2xl sm:text-3xl" />,
      title: 'Email',
      detail: 'contact@sanwiti.com',
      subDetail: 'appointments@sanwiti.com',
      link: 'mailto:contact@sanwiti.com',
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl sm:text-3xl" />,
      title: 'Address',
      detail: '123, MG Road, Bangalore',
      subDetail: 'Karnataka - 560001, India',
      link: null,
    },
    {
      icon: <FaClock className="text-2xl sm:text-3xl" />,
      title: 'Working Hours',
      detail: 'Mon - Sat: 9:00 AM - 7:00 PM',
      subDetail: 'Sunday: Appointment Only',
      link: null,
    },
  ];

  const socialMedia = [
    { icon: <FaFacebookF />, link: 'https://facebook.com/sanwiti', color: 'hover:bg-blue-600' },
    { icon: <FaInstagram />, link: 'https://instagram.com/sanwiti', color: 'hover:bg-pink-600' },
    { icon: <FaTwitter />, link: 'https://twitter.com/sanwiti', color: 'hover:bg-blue-400' },
    { icon: <FaLinkedinIn />, link: 'https://linkedin.com/company/sanwiti', color: 'hover:bg-blue-700' },
    { icon: <FaYoutube />, link: 'https://youtube.com/@sanwiti', color: 'hover:bg-red-600' },
    { icon: <FaWhatsapp />, link: 'https://wa.me/919876543210', color: 'hover:bg-green-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Get In Touch</h1>
        <p className="text-base sm:text-lg md:text-xl">Have questions? We're here to help.</p>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4 border-blue-500"
            >
              <div className="text-blue-500 mb-4 flex justify-center">{info.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="block text-gray-700 hover:text-blue-600 text-center"
                >
                  {info.detail}
                </a>
              ) : (
                <p className="text-gray-700 text-center">{info.detail}</p>
              )}
              <p className="text-gray-500 text-xs mt-1 text-center">{info.subDetail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <MapContainer
              center={bangalorePosition}
              zoom={13}
              className="h-64 sm:h-80 lg:h-96 w-full"
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={bangalorePosition}>
                <Popup>
                  <span className="font-bold text-blue-600">Sanwiti Psychiatry</span>
                  <br />
                  123, MG Road, Bangalore
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Connect With Us</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {socialMedia.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-500 text-white rounded-full transition transform hover:scale-110 ${social.color}`}
                aria-label="social"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Quick Links */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Quick Links</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['Home', 'About', 'Services', 'Gallery', 'Help'].map((link) => (
              <a
                key={link}
                href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
