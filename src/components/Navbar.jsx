import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Allow navication to other components

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {

  const [active, setActive] = useState(""); // scroll to top
  const [toggle, setToggle] = useState(false); // collapse menu for mobile

  return ( 
    <nav
      className={`${ styles.paddingX } w-full flex items-center py-5 fixed top-0 z-20 bg-transparent`} 
      >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        {/* React dom component that hepls keep track of where in the page you are */}
        <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0); // Scroll to top of page on click
            }}
          >

          {/* My logo */}
          <div className="flex items-center gap-4">
              <img className="w-10 h-10" src={logo} alt="logo" />
              <div className="font-medium w-full dark:text-white">
                  <div>Anesu Mugiya</div>
                  <div className="flex-nowrap items-center gap-2 ">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Lv. 85/100</span>
                      <div className="w-full h-1 bg-gray-200">
                          <div className="h-1 bg-purple-500 shadow shadow-purple-500/50" style={{ width: "85%" }}></div>
                      </div>
                  </div>
              </div>
          </div>
        </Link>

        {/* Other navigation links */}
        <div className='flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu} // menu off and on 
            alt='menu'
            className='w-[28px] h-[28px] object-contain z-10'
            onClick={() => setToggle(!toggle)} // chage state on toggle
          />

          {/* Collapsible menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black absolute h-screen w-1/2 top-0 right-0 z-0 transform transition-transform duration-500 ${
            toggle ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className='list-none flex justify-center items-center flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>


      </div>
    </nav>
  )
}

export default Navbar