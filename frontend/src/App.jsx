import HeroPage from './Pages/HeroPage'
import MainPage from './Pages/MainPage'
import Signup from './components/Elements/Signup'
import LogIn from './components/Elements/LogIn'
import { useState, useEffect } from 'react'

function App() {
  const [showSignup, setShowSignup] = useState(false)
  const [showLogIn, setShowLogIn] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowSignup(false)
        setShowLogIn(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <HeroPage
        onSignupClick={() => setShowSignup(true)}
        onLogInClick={() => setShowLogIn(true)}
      />
      <MainPage
        onSignupClick={() => setShowSignup(true)}
        onLogInClick={() => setShowLogIn(true)}
      />
      {showSignup && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowSignup(false)}
        >
          <div className="relative" onClick={e => e.stopPropagation()}>
            <Signup onClose={() => setShowSignup(false)} />
          </div>
        </div>
      )}
      {showLogIn && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowLogIn(false)}
        >
          <div className="relative" onClick={e => e.stopPropagation()}>
            <LogIn onClose={() => setShowLogIn(false)} />
          </div>
        </div>
      )}
    </>
  )
}
export default App