import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Profile from './pages/Profile'
import GameProfile from './pages/GameProfile'
import GameSession from './pages/GameSession'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/game/profile" element={<GameProfile />} />
        <Route path="/game" element={<GameSession />} />
        {/* Tambah route lain di sini */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
