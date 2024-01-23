import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

import * as authService from './services/authService'

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())

  function handleLogout() {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  function handleSignupOrLogin() {
    setUser(authService.getUser())
  }

  return (
    <>
    <div className="bg-green-500 text-9xl italic -tracking-wide">test</div>
      <NavBar user={user} handleLogout={handleLogout} />
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
          path="/profiles"
          element={
          <ProtectedRoute user={user}>
            <Profiles />
          </ProtectedRoute>
          }
        />
      </Routes>
      <div>
        {/*<Quiz />*/}
      </div>
    </>
  )
}

export default App
