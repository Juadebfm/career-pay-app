import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);
  return (
    <nav className="min-h-[91px] absolute z-40 text-white w-full bg-transparent flex items-center justify-between px-[30px] lg:px-16 py-4 lg:py-7 text-base lg:text-lg tracking-wide">
      {/* Logo */}
      <Link to="/" onClick={closeMenu}>
        <img
          src="/careerpay-logo.png"
          alt="Careerpay"
          className="w-[120px] sm:w-[140px] lg:w-[150px] h-auto"
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex space-x-6">
        <li>
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/testimonials"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Desktop Auth Buttons */}
      <div className="hidden lg:flex space-x-4">
        <button
          type="button"
          className="px-6 py-3 rounded-md hover:bg-white hover:text-[#121212] duration-300 ease-in-out transition-all"
        >
          Log In
        </button>
        <button
          type="button"
          className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#121212] duration-300 ease-in-out transition-all"
        >
          Sign Up
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-80 h-full bg-[#121212] bg-opacity-95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <img
            src="/careerpay-logo.png"
            alt="Careerpay"
            className="w-[120px] h-auto"
          />
          <button
            onClick={closeMenu}
            className="text-white text-2xl hover:text-gray-300 transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="p-6">
          <ul className="space-y-6 mb-8">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="block font-medium hover:text-gray-300 transition-colors duration-200 py-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className="block font-medium hover:text-gray-300 transition-colors duration-200 py-2"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                onClick={closeMenu}
                className="block font-medium hover:text-gray-300 transition-colors duration-200 py-2"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block font-medium hover:text-gray-300 transition-colors duration-200 py-2"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Auth Buttons */}
          <div className="space-y-4">
            <button
              type="button"
              onClick={closeMenu}
              className="w-full px-6 py-3 rounded-md hover:bg-white hover:text-[#121212] duration-300 ease-in-out transition-all text-center"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={closeMenu}
              className="w-full border border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#121212] duration-300 ease-in-out transition-all text-center"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
