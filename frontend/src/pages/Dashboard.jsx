import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    api.get('/auth/users')
      .then(res => setUser(res.data))
      .catch(() => {
        setUser(null)
        navigate('/login') // redirect ke login jika tidak login
      })
      .finally(() => setLoading(false))
  }, [navigate])

  if (loading) return <p>Loading...</p>
  if (!user) return null

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Data users: {JSON.stringify(user)}</p>
    </div>
  )
}

