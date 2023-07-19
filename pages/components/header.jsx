import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between md:justify-center md:gap-72 top-0 bg-black shadow-xl font-bold p-4 md:p-8 flex-wrap">
      <span className="text-orange-500 text-xl md:text-2xl tracking-wide">
        Compra Smart
      </span>
    
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-white">
          <li>
            <a href="#">Mis listas</a>
          </li>
          <li>
            <a href="#">Importantes</a>
          </li>
        </ul>
      </nav>
    
      <div className="md:hidden flex items-center">
        <button className="text-white" onClick={handleMobileMenuToggle}>
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
     
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4 w-full">
          <ul className="flex flex-col items-center bg-black p-4 text-white">
            <li className="mb-4">
              <a href="#">Mis listas</a>
            </li>
            <li>
              <a href="#">Importantes</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;