import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Navbar from '../components/Navbar'
import '../styles/products.css'
import '../styles/global.css'

function ProductDetailsPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { addToCart, cartCount } = useContext(CartContext)

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Product not found')
        }
        return res.json()
      })
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <p>Loading...</p>
      </div>
    </div>
  )
  
  if (error) return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <p>Error: {error}</p>
      </div>
    </div>
  )
  
  if (!product) return null

  return (
    <div className="page-container">
      <Navbar />
      
      <div className="content-wrapper">
        <div className="product-details">
          <div className="product-image-large">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info-large">
            <h2>{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price-large">${product.price.toFixed(2)}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage
