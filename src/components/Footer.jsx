import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Mountain } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Adventure Packages', path: '/packages' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const adventures = [
    'Trekking & Hiking',
    'Jungle Safaris',
    'Whitewater Rafting',
    
    
    'Alpine Camping',
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/adventure-logo.png"
                alt="Adventure Travels Logo"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-lg font-bold text-white">Adventure Travels</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              We craft extraordinary adventure experiences that push boundaries and
              create lifelong memories. Your journey of a lifetime starts here.
            </p>
            <div className="flex items-center gap-2 text-emerald-400">
              <Mountain className="h-5 w-5" />
              <span className="text-sm font-medium">Since 2010</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Adventure Types */}
          <div>
            <h3 className="text-white font-semibold mb-4">Adventures</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {adventures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-emerald-400" />
                <span>123 Adventure Lane, Kathmandu, Nepal 44600</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>+977-1-4567890</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>info@adventuretravels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Adventure Travels. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Crafted with passion for adventure
          </p>
        </div>
      </div>
    </footer>
  );
}
