import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function LoginPage() {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    if (!username || !password) {
      setError('Both username and password are required.')
      return
    }

    try {
      const res = await fetch(`http://localhost:5000/users?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`)
      const users = await res.json()

      if (users.length === 0) {
        setError('Invalid username or password.')
        return
      }

      login(users[0])
      navigate('/')
    } catch (err) {
      setError('Failed to login. Please try again later.')
    }
  }

  return (
    <div className="login-page" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
      color: 'var(--color-text-light)',
      padding: '2rem',
      boxSizing: 'border-box',
    }}>
      <h1 style={{ fontFamily: "var(--font-family)", fontWeight: '700', fontSize: '3rem', marginBottom: '0.5rem' }}>
        Welcome Back to Faith Tech Store!
      </h1>
      <h2 style={{ fontFamily: "var(--font-family)", fontWeight: '600', fontSize: '2rem', marginBottom: '1rem' }}>
        Login to your account and explore amazing products
      </h2>
      {error && <p style={{ color: 'var(--color-primary-hover)', fontWeight: '600', marginBottom: '1rem' }}>{error}</p>}
      <form onSubmit={handleLogin} className="login-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '400px' }}>
        <label style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.3rem' }}>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: 'none', fontSize: '1rem' }} />
        </label>
        <label style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.3rem' }}>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: 'none', fontSize: '1rem' }} />
        </label>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
          <button type="submit" style={{ flex: 1, padding: '0.75rem', backgroundColor: 'var(--color-secondary)', border: 'none', borderRadius: '6px', color: 'var(--color-text-light)', fontWeight: '700', cursor: 'pointer' }}>
            Login
          </button>
          <button type="button" onClick={() => navigate('/signup')} style={{ flex: 1, padding: '0.75rem', backgroundColor: 'var(--color-primary)', border: 'none', borderRadius: '6px', color: 'var(--color-text-light)', fontWeight: '700', cursor: 'pointer' }}>
            Sign Up
          </button>
        </div>
      </form>
      <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '1rem', opacity: 0.8 }}>
        Unlock endless possibilities with your Faith Tech Store account.
      </p>
    </div>
  )
}

export default LoginPage
