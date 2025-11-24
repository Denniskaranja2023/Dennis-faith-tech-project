import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'
import '../styles/products.css'

function Header() {
  const { cartCount } = useContext(CartContext)
  const { user } = useContext(AuthContext)

  if (!user) {
    return null
  }

  return (
    <header className="main-header">
      <div className="container">
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0' }}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link to="/cart" className="nav-link cart-link">
              Cart ({cartCount})
            </Link>
            <button 
              className="logout-btn-header"
              onClick={() => { 
                window.localStorage.removeItem('authenticatedUser'); 
                window.location.href = '/login' 
              }}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
