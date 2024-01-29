import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

  const location = useLocation();
  const menus = user ? loggedInMenus : loggedOutMenus;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const activeIndex = menus.findIndex(menu => menu.route === location.pathname);
    setActive(activeIndex >= 0 ? activeIndex : 0);
  }, [location, menus]);

  return (
    <footer className="navbar-container">
      <nav className="nav">
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


























































