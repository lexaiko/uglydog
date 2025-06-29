import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Tambah route lain di sini */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
