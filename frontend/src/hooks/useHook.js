import { useEffect, useState } from 'react'
import api, { setAuthToken } from '../api'

export default function useUser() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setAuthToken(token)
      api.get('/user')
        .then((res) => setUser(res.data))
        .catch(() => setUser(null))
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  return { user, loading }
}
