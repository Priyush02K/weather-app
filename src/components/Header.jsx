import React from 'react';

// Use an arrow function for modern React syntax.
const Header = () => {
  return (
    // Add a modern gradient and stronger shadow.
    <header className="w-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-4 sm:py-6 shadow-2xl sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header Row: Title on left, Nav on right, or Menu button on right */}
        <div className="flex justify-between items-center">
          
          {/* Enhanced Title/Logo */}
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight cursor-pointer hover:opacity-90 transition">
            ⚡ Smart Weather Portal
          </h1>

          {/* Navigation Links (Desktop/Tablet) */}
          <nav className="hidden md:flex space-x-6">
            <a 
              href="#" 
              className="text-lg font-medium hover:text-indigo-200 transition duration-150 cursor-pointer"
            >
              Home
            </a>
            <a 
              href="#forecast" 
              className="text-lg font-medium hover:text-indigo-200 transition duration-150 cursor-pointer"
            >
              5-Day Forecast
            </a>
            <a 
              href="#ai-assistant" 
              className="text-lg font-medium hover:text-indigo-200 transition duration-150 cursor-pointer"
            >
              AI Assistant
            </a>
          </nav>

          {/* Hamburger Menu Icon (Mobile) */}
          <button className="md:hidden text-white p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white">
            {/* Simple SVG for Menu Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>

          
        </div>
        
        {/* NOTE: A full mobile menu would typically be displayed here conditionally */}
        
      </div>
    </header>
  );
};

export default Header;
