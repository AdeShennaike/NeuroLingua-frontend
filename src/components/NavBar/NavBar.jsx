import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import { MdManageHistory } from 'react-icons/md';
import { LuBrain } from 'react-icons/lu';
import { IoMdLogOut } from 'react-icons/io';
import { PiPersonSimpleThrowDuotone } from 'react-icons/pi';
import { LiaSignLanguageSolid } from 'react-icons/lia';

const NavBar = ({ user, handleLogout, handleSignupOrLogin }) => {
  const loggedInMenus = [
    { name: 'Quiz', icon: <LuBrain />, route: '/quiz', dis: 'translate-x-0' },
    { name: 'History', icon: <MdManageHistory />, route: '/history', dis: 'translate-x-16' },
    { name: 'Profile', icon: <FaUserEdit />, route: '/profile', dis: 'translate-x-32' },
    { name: 'Log out', icon: <IoMdLogOut />, dis: 'translate-x-48', onClick: handleLogout },
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
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white px-6 rounded-t-md">
      <nav className={`flex ${user ? 'justify-between' : 'justify-center'} gap-8`}>
        {menus.map((menu, i) => (
          <Link
            key={i}
            to={menu.route}
            className={`relative text-center pt-6 ${
              i === active
                ? 'text-white bg-gray-500 rounded-full p-2 w-16 h-16'
                : 'text-gray-500'
            }`}
            onClick={() => {
              setActive(i);
              if (menu.onClick) menu.onClick();
            }}
            style={{
              top: i === active ? '-16px' : '0',
              marginBottom: '10px',
            }}
          >
            {menu.icon ? (
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && '-mt-2 text-white'
                }`}
              >
                <span className="inline-block">{menu.icon}</span>
              </span>
            ) : null}
            <div className={`${i === active ? 'text-white' : 'text-gray-500'} mt-2 text-xs text-center`} style={{ marginTop: '0.98rem' }}>
              {menu.name}
            </div>
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default NavBar;



















































