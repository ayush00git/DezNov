import HeroPage from './Pages/HeroPage'
import MainPage from './Pages/MainPage'
import ProfilePage from './Pages/ProfilePage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return(
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/explore" element={<MainPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  )
}
export default App