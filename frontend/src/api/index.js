import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  // withCredentials: true, // hanya wajib jika pakai cookies (kamu pakai token, jadi ini bisa false juga)
})

// Inject Bearer token ke semua request
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common['Authorization']
  }
}

export default api
