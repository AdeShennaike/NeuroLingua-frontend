
// Import statements for required hooks, components, and services.
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';
import Profile from './pages/Profiles/Profiles'; // Ensure correct import for Profile component
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Quiz from './components/Quiz/Quiz';


import * as authService from './services/authService';

const App = () => {
  const navigate = useNavigate();
  // State hook to manage the user's authentication status.
  const [user, setUser] = useState(authService.getUser());

  // Function to handle user logout.
  function handleLogout() {
    authService.logout(); // Calls the logout function from authService.
    setUser(null); // Resets user state to null.
    navigate('/'); // Navigates back to the homepage.
  }

  // Function to update user state upon login or signup.
  function handleSignupOrLogin() {
    setUser(authService.getUser()); // Updates user state with the logged-in user's data.
  }

 // useEffect hook to navigate to the sign-up page upon component mount
 useEffect(() => {
  navigate('/login');
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <>

      {/* NavBar component, passing user and handleLogout as props */}
      <NavBar user={user} handleLogout={handleLogout} />
      {/* Routes definition for navigation */}
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              {/* Profile component wrapped in ProtectedRoute to ensure it's accessible only to authenticated users */}
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={<history />}
        />
      </Routes>
      {/* Conditional rendering of the Quiz component */}
      {user && (
        <div>
          {/* Quiz component will only render if there is a user object, indicating the user is logged in */}
          <Quiz />
        </div>
      )}
    </>
  );
};

export default App;
