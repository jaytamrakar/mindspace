import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Registration from '../pages/RegistrationForm'
const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full bg-white drop-shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-7">
          {/* <a href="#" className="font-bold text-3xl">
            Mind Space
          </a> */}
          <Link to="/" className="font-bold text-3xl" >Mind Space</Link>
          <ul
            className="bg-white flex justify-between items-center flex-col gap-5 text-gray-400 absolute overflow-y-scroll w-full left-0 top-20 px-6 transition-all duration-500 ease-out h-0 md:static md:flex-row md:h-auto md:top-auto md:overflow-auto md:justify-center md:w-fit"
            id="navbar-menu"
          >
            {/* <li>
              <a href="#">Home</a>
            </li> */}
            <Link to='/'>Home</Link>
            {/* <li>
              <a href="#">About</a>
            </li> */}
            <Link to='/about'>About</Link>
            {/* <li>
              <a href="#">Doctors</a>
            </li> */}
            <Link to='/doctors'>Doctors</Link>
            <li>
              <a href="#"></a>
            </li>
            {/* <li>
              <a
                href="#"
                className="bg-blue-700 transition-colors hover:bg-blue-800 text-white py-2 px-7 rounded-md block md:hidden"
              >
                Sign Up
              </a>
            </li> */}
          </ul>
          <div className="flex">

            <Link className="bg-blue-700 transition-colors hover:bg-blue-800 text-white py-2 px-7 mr-2 rounded-md hidden md:block" to="/signin">Login</Link>
            <Link className="bg-indigo-600 transition-colors hover:bg-blue-800 text-white py-2 px-7  rounded-md hidden md:block" to="/Registration">Sign Up</Link>
          </div>


          <button className="md:hidden" id="menu-btn">
            <i className="fas fa-bars text-2xl md:hidden"></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
