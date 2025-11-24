import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function SignupPage() {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault()
    setError('')

    if (!username || !email || !password) {
      setError('All fields are required.')
      return
    }

    try {
      const res = await fetch('http://localhost:5000/users?username=' + encodeURIComponent(username))
      const existingUsers = await res.json()
      if (existingUsers.length > 0) {
        setError('Username already exists.')
        return
      }

      const newUser = { username, email, password }
      const createRes = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      })

      if (!createRes.ok) {
        setError('Failed to create user.')
        return
      }

      // Auto login after signup
      login(newUser)
      navigate('/')
    } catch (err) {
      setError('Error signing up. Try again later.')
      console.error(err)
    }
  }

  return (
    <div className="container">
      <h1>Sign Up</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <button
        onClick={() => navigate('/login')}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Login
      </button>
    </div>
  )
}

export default SignupPage
