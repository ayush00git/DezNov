import HeroPage from './Pages/HeroPage'
import MainPage from './Pages/MainPage'
import ProfilePage from './Pages/ProfilePage'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './Pages/SignupPage'
import LoginPage from './Pages/LoginPage'
import ChatsPage from './Pages/ChatsPage'

function App() {
  return(
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/explore" element={<MainPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/chats" element={<ChatsPage />} />
    </Routes>
  )
}
export default App