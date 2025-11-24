import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import '../styles/landing.css'
import '../styles/global.css'

function LandingPage() {
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const handleShopNow = () => {
    navigate('/products')
  }

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Discover Amazing Products</h1>
            <p className="hero-subtitle">Find everything you need in our curated collection of premium items</p>
            <button className="shop-now-btn" onClick={handleShopNow}>
              Shop Now
            </button>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" alt="Shopping" />
          </div>
        </section>

        <section className="features-section">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop" alt="Quality" />
              <h3>Premium Quality</h3>
              <p>Carefully selected products that meet our high standards</p>
            </div>
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" alt="Fast Delivery" />
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping to your doorstep</p>
            </div>
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=300&h=200&fit=crop" alt="Support" />
              <h3>24/7 Support</h3>
              <p>Always here to help with any questions or concerns</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Start Shopping?</h2>
          <p>Explore our wide range of products and find exactly what you're looking for</p>
          <button className="cta-btn" onClick={handleShopNow}>
            Browse Products
          </button>
        </section>
      </div>
    </div>
  )
}

export default LandingPage
