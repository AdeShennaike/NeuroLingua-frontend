import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user, handleLogout, handleSignupOrLogin }) => {
  const handleLoginClick = () => {
    console.log("handleSignupOrLogin in NavBar:", handleSignupOrLogin);
    handleSignupOrLogin();
  };
  

  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white p-4">
      <nav className="flex justify-around">
        {user ? (
          <>
            <Link to="/quiz" className="hover:text-gray-300">
              Quiz
            </Link>
            <Link to="/history" className="hover:text-gray-300">
              History
            </Link>
            <Link to="/profiles" className="hover:text-gray-300">
              Profiles
            </Link>
            <button onClick={handleLogout} className="hover:text-gray-300">
              Logout
            </button>
          </>
        ) : (
          <div>
          <Link to="/login" className="hover:text-gray-300">
              Log in
            </Link>
          <Link to="/signup" className="hover:text-gray-300">
             Sign up
           </Link>
           </div>
        )}
      </nav>
    </footer>
  );
};

export default NavBar;


