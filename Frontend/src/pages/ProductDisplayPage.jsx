import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Navbar from '../components/Navbar'
import '../styles/products.css'
import '../styles/global.css'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function ProductDisplayPage() {
  const { cartCount } = useContext(CartContext)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const query = useQuery()
  const initialSearch = query.get('search') || ''
  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const [categoryFilter, setCategoryFilter] = useState('All')

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setFilteredProducts(data)
      })
      .catch((err) => console.error('Failed to fetch products:', err))
  }, [])

  useEffect(() => {
    let filtered = products
    if (categoryFilter !== 'All') {
      filtered = filtered.filter(product => product.category === categoryFilter)
    }
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    setFilteredProducts(filtered)
  }, [searchTerm, categoryFilter, products])

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const categories = ['All', ...new Set(products.map(p => p.category))]

  return (
    <div className="page-container">
      <Navbar showSearch={true} onSearch={handleSearch} searchTerm={searchTerm} />
      
      <div className="content-wrapper">
        <div className="filters-section">
          <h2>Our Products</h2>
          <div className="filters">
            <label>Category: </label>
            <select 
              value={categoryFilter} 
              onChange={e => setCategoryFilter(e.target.value)}
              className="category-select"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="products-flex">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <Link to={`/products/${product.id}`} className="product-link">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="no-products">
              <p>No products found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDisplayPage
