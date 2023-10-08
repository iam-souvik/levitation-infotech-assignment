import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 sticky top-0 left-0 right-0 ">
      <div className="container mx-auto flex justify-between items-center ">
        <Link to="/" className="text-white text-xl font-bold">
          Home
        </Link>
        <div className="md:hidden">
          {/* Hamburger icon for mobile */}
          <button
            className="text-white text-xl"
            // Add functionality to toggle a mobile menu here
          >
            ☰
          </button>
        </div>
        <ul className="hidden md:flex space-x-4 gap-10 font-bold tracking-wide">
          <li>
            <Link to="/login" className="text-white">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-white">
              Register
            </Link>
          </li>
          <li>
            <Link to="/multiform" className="text-white">
              MultiForm
            </Link>
          </li>
          <li>
            <Link to="/submissiontable" className="text-white">
              Submission Table
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
