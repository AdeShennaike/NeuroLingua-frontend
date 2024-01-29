
// Import statements for required hooks, components, and services.
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';
import Profile from './pages/Profile/Profile'; // Ensure correct import for Profile component
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Quiz from './components/Quiz/Quiz';
import History from './pages/History/History';
import News from './pages/News/News';
import * as authService from './services/authService';

import backgroundVideo from './assets/milk.mp4'
import overlayImage from './assets/logo2.png'



const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(authService.getUser());

  function handleLogout() {
    authService.logout();
    setUser(null);
    navigate('/');
  }

  function handleSignupOrLogin() {
    setUser(authService.getUser);
    console.log("handleSignupOrLogin called");
  }
  

  // useEffect hook to navigate to the sign-up page upon component mount
  useEffect(() => {
    if (user) {
      // If the user is already logged in, navigate to the quiz page
      return
    } else {
      // If not logged in, navigate to the login page
      navigate('/login');
    }
  }, [user, navigate]); // Add user as a dependency to trigger the effect when user state changes

  return (
    <>
      <video autoPlay loop muted className="video-background z-[-1] fixed w-[385%]" >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
  src={overlayImage} // Replace overlayImage with the path to your overlay image
  alt="Overlay"
  className="overlay-image z-[-1] fixed w-[212px] h-[220px]" // Adjust the width and height as desired
/>



      
      {/* NavBar component, passing user and handleLogout as props */}
      <NavBar user={user} handleLogout={handleLogout} handleSignupOrLogin={handleSignupOrLogin} />
      {/* Routes definition for navigation */}
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        {user ? 
          // If user is logged in, don't render the login route
          <>
            <Route path="/login" element={<Navigate to="/" />} />
          </>
         : 
          <>
          {/* If user is not logged in, render the login route*/}
          <Route path="/login" element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
          <Route path="/signup" element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
          </>
        }
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              {/* Profile component wrapped in ProtectedRoute to ensure it's accessible only to authenticated users */}
              <Profile handleLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
         <Route
          path="/history"
          element={<History />}
        />
         <Route
          path="/quiz"
          element={<Quiz />}
        />
         <Route
          path="/news"
          element={<News />}
        />
      </Routes>
    </>
  );
};

export default App;




