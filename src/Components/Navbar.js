import React, { useState } from 'react';
import { BiMenuAltLeft ,BiCctv } from 'react-icons/bi';
import { HiUser, HiOutlineHome} from 'react-icons/hi';
import {RiBookletFill } from 'react-icons/ri';
import {GiBookshelf } from 'react-icons/gi';
import './Navbar.css'; 


  const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="navbar">
       
          <div className="navbar-toggler" onClick={toggleMenu}>
            <BiMenuAltLeft size={70} fill="pink" />
          </div>
          <div className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <HiOutlineHome size={50} /> <span>Summary Dashboard</span>
              </li>
              <li>
              <GiBookshelf size={50}/> <span>Attendance Tracking</span>
              </li>
              <li>
              <BiCctv size={50} /> <span>Behavioral Analytics</span>
            </li>
            <li >
             <RiBookletFill size={50} /><span> Academic Performance Tracking </span>
            </li>
            </ul>
          </div>
          <a className="navbar-brand" href="#">
            <HiUser fill="pink" size={70} />
          </a>
   
      </nav>
    );
  };
  
  export default Navbar;