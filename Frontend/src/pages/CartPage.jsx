import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/global.css'

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useContext(CartContext)
  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate('/payment')
  }

  if (cartItems.length === 0) {
    return (
      <div className="page-container">
        <Navbar />
        <div className="content-wrapper">
          <h2>Your cart is empty</h2>
          <Link to="/products">Go to products</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <h2>Your Shopping Cart</h2>
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={e => updateQuantity(item.id, parseInt(e.target.value, 10))}
                  />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Total: ${cartTotal.toFixed(2)}</h3>
        <button onClick={handleCheckout}>Proceed to Payment</button>
      </div>
    </div>
  )
}

export default CartPage
