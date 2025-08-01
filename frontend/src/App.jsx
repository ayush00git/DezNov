import HeroPage from './Pages/HeroPage'
import MainPage from './Pages/MainPage'
import ProfilePage from './Pages/ProfilePage'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './Pages/SignupPage'
import LoginPage from './Pages/LoginPage'
import ChatsPage from './Pages/ChatsPage'
import UploadPage from './Pages/UploadPage'
import ProjectDetailPage from './Pages/ProjectViewerPage'
import MakeProfilePage from './Pages/MakeProfilePage'

function App() {
  return(
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/explore" element={<MainPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/auth/signup" element={<SignupPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/chats" element={<ChatsPage />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/project/id" element={<ProjectDetailPage />} />
      <Route path="/profileSetup" element={<MakeProfilePage />} />
    </Routes>
  )
}
export default App