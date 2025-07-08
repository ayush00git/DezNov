import HeroPage from './Pages/HeroPage'
import MainPage from './Pages/MainPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return(
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/explore" element={<MainPage />} />
    </Routes>
  )
}
export default App