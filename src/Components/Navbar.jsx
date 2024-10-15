


import React, { useState } from 'react';
import {Link} from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 p-4  ">
      <div className="container mx-auto flex justify-between  items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold animate-bounce w-6 h-6 ">
          <a href="/">Freespanz</a>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-16  text-white  list-none "> 
          <li  className="hover:text-gray-300 " ><Link to={"/"}>Home</Link></li>
           <li  className="hover:text-gray-300" ><Link to={"/blog"}>Blogs</Link></li>
           <li  className="hover:text-gray-300"  ><Link to={"/about"}>About</Link></li>
           <li  className="hover:text-gray-300"  ><Link to={"/Offerings"}>Offerings</Link></li>
           <li  className="hover:text-gray-300"  ><Link to={"/contact"}>Contact</Link></li>
        </div>
       
        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden  list-none"> 
        <li className="block py-2 px-4 text-white hover:bg-blue-700 "><Link to={"/"}>Home</Link></li>
        <li className="block py-2 px-4 text-white hover:bg-blue-700 "><Link to={"/blog"}>Blogs</Link></li> 
        <li className="block py-2 px-4 text-white hover:bg-blue-700"><Link to={"/about"}>About</Link></li> <li className="block py-2 px-4 text-white hover:bg-blue-700"><Link to={"/blog"}>Blogs</Link></li>  
        <li className="block py-2 px-4 text-white hover:bg-blue-700"><Link to={"/Offerings"}>Offerings</Link></li> 
        <li className="block py-2 px-4 text-white hover:bg-blue-700"><Link to={"/contact"}>Contact</Link></li> 
        </div>
      )}
    </nav>
  );
};

export default Navbar;
