import { useState } from 'react'
import api, { setAuthToken } from '../api'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('admin@admin.com')
  const [password, setPassword] = useState('password')
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
  e.preventDefault()
  try {
    await api.get('/sanctum/csrf-cookie') // Kalau kamu pakai Sanctum untuk SPA
    const res = await api.post('/api/login', { email, password })

    const { name, token } = res.data.data

    // Simpan token ke localStorage
    localStorage.setItem('token', token)

    alert(`Login berhasil. Halo ${name}`)
  } catch (err) {
    console.error(err)
    setError('Login gagal. Periksa email atau password.')
  }
}


  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}
