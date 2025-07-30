import HeroPage from './Pages/HeroPage'
import MainPage from './Pages/MainPage'
import ProfilePage from './Pages/ProfilePage'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './Pages/SignupPage'
import LoginPage from './Pages/LoginPage'
import ChatsPage from './Pages/ChatsPage'
import UploadPage from './Pages/UploadPage'
import ProjectDetailPage from './Pages/ProjectViewerPage'

function App() {
  return(
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/explore" element={<MainPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/chats" element={<ChatsPage />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/project/id" element={<ProjectDetailPage />} />
    </Routes>
  )
}
export default App