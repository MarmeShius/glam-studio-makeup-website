import { useState } from "react";
import { Link } from "react-router-dom";
import pars from "../assets/pars.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-300 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <img src={pars} alt="Glam Beauty Studio" className="w-12 h-12 object-contain"/>
          <h1 className="text-2xl font-bold text-rose-600">Glam Beauty Studio</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-500 hover:text-rose-800 transition font-bold">Home</Link>
          <Link to="/services" className="text-gray-500 hover:text-rose-800 transition font-bold">Services</Link>
          <Link to="/appointment" className="text-gray-500 hover:text-rose-800 transition font-bold">Appointment</Link>
          <Link to="/aboutus" className="text-gray-500 hover:text-rose-800 transition font-bold">About</Link>
          <Link to="/contact" className="text-gray-500 hover:text-rose-800 transition font-bold">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-rose-800 focus:outline-none"
          >
            {/* Hamburger Icon */}
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-pink-200 px-6 pb-4 space-y-3">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-500 hover:text-rose-800 font-bold"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block text-gray-500 hover:text-rose-800 font-bold"
          >
            Services
          </Link>
          <Link
            to="/appointment"
            onClick={() => setIsOpen(false)}
            className="block text-gray-500 hover:text-rose-800 font-bold"
          >
            Appointment
          </Link>
          <Link
            to="/aboutus"
            onClick={() => setIsOpen(false)}
            className="block text-gray-500 hover:text-rose-800 font-bold"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-500 hover:text-rose-800 font-bold"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
