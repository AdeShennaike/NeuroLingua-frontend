import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import { MdManageHistory } from 'react-icons/md';
import { LuBrain } from 'react-icons/lu';
import { PiPersonSimpleThrowDuotone } from 'react-icons/pi';
import { LiaSignLanguageSolid } from 'react-icons/lia';
import { IoNewspaperOutline } from "react-icons/io5";
import "./NavBar.css"


const NavBar = ({ user, handleSignupOrLogin }) => {
  const loggedInMenus = [
    { name: 'News', icon: <IoNewspaperOutline />, route: '/news', dis: 'translate-x-32' },
    { name: 'Quiz', icon: <LuBrain />, route: '/quiz', dis: 'translate-x-0' },
    { name: 'History', icon: <MdManageHistory />, route: '/history', dis: 'translate-x-16' },
    { name: 'Profile', icon: <FaUserEdit />, route: '/profile', dis: 'translate-x-48' },
  ];

  const loggedOutMenus = [
    { name: 'Log in', icon: <PiPersonSimpleThrowDuotone />, route: '/login' },
    { name: 'Sign up', icon: <LiaSignLanguageSolid />, route: '/signup' },
  ];

  const menus = user ? loggedInMenus : loggedOutMenus;

  const [active, setActive] = useState(0);

  const handleLoginClick = () => {
    console.log('handleSignupOrLogin in NavBar:', handleSignupOrLogin);
    handleSignupOrLogin();
  };

  return (
    <footer className="fixed bottom-0 w-full bg-[#042427] text-white px-6 rounded-t-md">
      <nav className={`flex ${user ? 'justify-between' : 'justify-center'} gap-8`}>
        {menus.map((menu, i) => (
          <Link
            key={i}
            to={menu.route}
            className={`relative text-center pt-6 ${
              i === active
                ? 'text-white bg-gray-500 rounded-full p-2 w-16 h-16 glowing-effect' // Added glowing-effect class here
                : 'text-gray-500'
            } group`}
            onClick={() => {
              setActive(i);
              if (menu.onClick) menu.onClick();
            }}
            style={{
              top: i === active ? '-16px' : '0',
              marginBottom: '10px',
            }}
          >
            {/* Decorative elements */}
            <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1"></span>
            <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>

            {menu.icon ? (
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && '-mt-2 text-white'
                }`}
              >
                <span className="inline-block">{menu.icon}</span>
              </span>
            ) : null}
            <div
              className={`${i === active ? 'text-white' : 'text-gray-500'} mt-2 text-xs text-center`}
              style={{ marginTop: '0.98rem' }}
            >
              {menu.name}
            </div>
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default NavBar;





















































