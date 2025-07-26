import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b-2 border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                Svasthya
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-emerald-600 hover:text-emerald-700 px-4 py-2 text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 text-base font-medium">
              Home
            </Link>
            <Link to="/features" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 text-base font-medium">
              Features
            </Link>
            <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 text-base font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 text-base font-medium">
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link to="/login" className="block px-3 py-2 text-emerald-600 text-base font-medium">
                Sign In
              </Link>
              <Link to="/signup" className="block px-3 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg text-base font-medium ml-3 mr-3 mt-2 text-center">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNavbar;