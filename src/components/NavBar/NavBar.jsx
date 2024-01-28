import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import { MdManageHistory } from 'react-icons/md';
import { LuBrain } from 'react-icons/lu';
import { PiPersonSimpleThrowDuotone } from 'react-icons/pi';
import { LiaSignLanguageSolid } from 'react-icons/lia';
import { IoNewspaperOutline } from "react-icons/io5";
import "./NavBar.css";

const NavBar = ({ user, handleSignupOrLogin }) => {
  const loggedInMenus = [
    { name: 'Quiz', icon: <LuBrain />, route: '/quiz' },
    { name: 'History', icon: <MdManageHistory />, route: '/history' },
    { name: 'Profile', icon: <FaUserEdit />, route: '/profile' },
    { name: 'News', icon: <IoNewspaperOutline />, route: '/news' },
  ];

  const loggedOutMenus = [
    { name: 'Log in', icon: <PiPersonSimpleThrowDuotone />, route: '/login' },
    { name: 'Sign up', icon: <LiaSignLanguageSolid />, route: '/signup' },
  ];

  const menus = user ? loggedInMenus : loggedOutMenus;
  const [active, setActive] = useState(0);

  return (
    <footer className="navbar-container">
      <nav className="nav">
        {/* Menu items */}
        {menus.map((menu, i) => (
          <Link
            key={i}
            to={menu.route}
            className={`nav-item ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            {menu.icon}
            <div className="menu-name">{menu.name}</div>
          </Link>
        ))}
      </nav>
      <span className="bubble bubble-left"></span> {/* Left bubble */}
      <div className="navbar-text">Neuro Lingua</div> {/* Center text */}
      <span className="bubble bubble-right"></span> {/* Right bubble */}
    </footer>
  );
};

export default NavBar;

























































