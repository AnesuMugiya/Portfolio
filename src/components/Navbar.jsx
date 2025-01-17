import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Allow navication to other components

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {

  const [active, setActive] = useState("");

  return (
    <nav
      className={`${ styles.paddingX } w-full flex items-center py-5 fixed top-0 z-20 bg-primary`} 
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
            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Nesy's &nbsp;
            <span className='sm:block hidden'> | Creative Lab</span>
          </p>
        </Link>

        {/* Other navigation links */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              
            </li>
          ))}
        </ul>


      </div>
    </nav>
  )
}

export default Navbar