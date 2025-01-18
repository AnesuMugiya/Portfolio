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
          <div class='flex items-center gap-4'>
            <img class='w-10 h-10 ' src={logo} alt='logo' />
            <div class="font-medium dark:text-white">
                <div>Anesu Mugiya</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Lv. ∞</div>
            </div>
          </div>

        </Link>

        {/* Other navigation links */}
        <div className='flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu} // menu off and on 
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)} // chage state on toggle
          />

          {/* Collapsible menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
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