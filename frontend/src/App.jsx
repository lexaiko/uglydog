import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Login from './pages/login';
import GameProfile from './pages/GameProfile';
import GameSession from './pages/GameSession';

function App() {
  useEffect(() => {
    const isTracked = localStorage.getItem('visitorTracked');

    if (!isTracked) {
      fetch('http://localhost:8000/api/visitor/track', {
        method: 'POST',
      })
        .then(() => {
          localStorage.setItem('visitorTracked', 'yes');
        })
        .catch(err => {
          console.error('Tracking failed:', err);
        });
    }

    fetch('http://localhost:8000/api/visitor/total')
      .then(res => res.json())
      .then(data => {
        console.log('Total Visitors:', data.total);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/game/profile" element={<GameProfile />} />
        <Route path="/game" element={<GameSession />} />
        {/* Tambah route lain di sini */}
      </Routes>
      <div className="fixed bottom-0 right-0 m-4">
        <button
          onClick={() => {
            localStorage.removeItem('visitorTracked');
            window.location.reload();
          }}
        >
          Reset Visitor Tracker
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;

