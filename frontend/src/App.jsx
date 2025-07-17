import HeroPage from './Pages/HeroPage'
import MainPage from './Pages/MainPage'
import ProfilePage from './Pages/ProfilePage'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './Pages/SignupPage'
import LoginPage from './Pages/LoginPage'

function App() {
  return(
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/explore" element={<MainPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
export default App