import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'
import '../styles/products.css'

function ProductHeader({ onSearch }) {
  const { cartCount } = useContext(CartContext)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchTerm)
    } else {
      navigate('/products?search=' + encodeURIComponent(searchTerm))
    }
  }

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    if (onSearch) {
      onSearch(value)
    }
  }

  if (!user) {
    return null
  }

  return (
    <header className="product-header">
      <div className="container">
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0' }}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <button type="submit" className="search-btn">Search</button>
          </form>
          
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
        </nav>
      </div>
    </header>
  )
}

export default ProductHeader