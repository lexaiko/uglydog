// src/pages/Login.jsx
import { useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      // Step 1: Ambil CSRF token dulu
      await api.get('/sanctum/csrf-cookie')

      // Step 2: Kirim login ke backend
      await api.post('/auth/login', {
        email,
        password,
      })

      console.log('Login sukses, redirect ke dashboard')
      navigate('/dashboard')

    } catch (err) {
      console.error(err)
      setError('Login gagal. Cek email/password atau backend.')
    }
  }

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto p-4 space-y-3">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}

