import { Link } from "react-router-dom";
import pars from "../assets/pars.png";

function Navbar() {
  return (
    <nav className="bg-pink-300 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <img src={pars} alt="Glam Beauty Studio" className="w-12 h-12 object-contain"/>
          <h1 className="text-2xl font-bold text-rose-600">Glam Beauty Studio</h1>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-500 hover:text-rose-800 transition font-bold ">Home</Link>
          <Link to="/services" className="text-gray-500 hover:text-rose-800 transition font-bold ">Services</Link>
          <Link to="/appointment" className="text-gray-500 hover:text-rose-800 transition font-bold ">Appointment</Link>
          <Link to="/aboutus" className="text-gray-500 hover:text-rose-800 transition font-bold ">About</Link>
          <Link to="/contact" className="text-gray-500 hover:text-rose-800 transition font-bold">Contact</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

