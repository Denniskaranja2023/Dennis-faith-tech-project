import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

function Navbar({ showSearch = false, onSearch, searchTerm = '' }) {
  const { cartCount } = useContext(CartContext)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        
        {showSearch && (
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => onSearch && onSearch(e.target.value)}
              className="search-input"
            />
          </div>
        )}
        
        <div className="nav-right">
          <Link to="/cart" className="nav-link cart-link">
            Cart ({cartCount})
          </Link>
          <button 
            className="logout-btn"
            onClick={() => { 
              window.localStorage.removeItem('authenticatedUser'); 
              window.location.href = '/login' 
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar