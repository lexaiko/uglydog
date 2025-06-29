import useUser from '../hooks/useUser'

export default function Dashboard() {
  const { user, loading } = useUser()

  if (loading) return <p>Loading...</p>
  if (!user) return <p>Kamu belum login.</p>

  return <h1>Selamat datang, {user.name}!</h1>
}
