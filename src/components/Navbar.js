import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link,useLocation,useNavigate  } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800  p-4 ">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-xl">Company Logo</div>
        <div className="hidden  md:flex items-center space-x-12">
          <Link to="/" className="text-white hover:text-gray-300 transition duration-200">Home</Link>

          <Link to="/about" className="text-white hover:text-gray-300 transition duration-200">About</Link>
          <Link to="/blogs" className="text-white hover:text-gray-300 transition duration-200">Blogs</Link>
          </div>
          <div className="pr-72 text-xl ">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div class="hidden md:flex items-center space-x-4 pr-10">
            <Link to="/login" class="text-white hover:text-gray-300 transition duration-200">Login</Link>
            <Link to="/signin" class="text-white hover:text-gray-300 transition duration-200">SignUp</Link>
          </div>
        
        <button className="md:hidden text-white">
          {/* Add your mobile menu icon here */}
          <h1>sign</h1>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
