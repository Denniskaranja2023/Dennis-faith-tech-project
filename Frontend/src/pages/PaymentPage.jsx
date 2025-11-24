import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/global.css'

function PaymentPage() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !address || !cardNumber || !expiry || !cvv) {
      setError('Please fill in all fields')
      return
    }
    // Basic card number validation
    const cardNumberRegex = /^\d{16}$/
    if (!cardNumberRegex.test(cardNumber)) {
      setError('Card number must be 16 digits')
      return
    }
    // Basic CVV validation
    const cvvRegex = /^\d{3,4}$/
    if (!cvvRegex.test(cvv)) {
      setError('CVV must be 3 or 4 digits')
      return
    }
    setError('')
    // TODO: Implement payment processing logic here
    alert('Payment successful (placeholder)')
    navigate('/order-confirmation')
  }

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <h2>Payment</h2>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Shipping Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div>
            <label>Card Number:</label>
            <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} maxLength="16" />
          </div>
          <div>
            <label>Expiry Date:</label>
            <input type="text" placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
          </div>
          <div>
            <label>CVV:</label>
            <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} maxLength="4" />
          </div>
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  )
}

export default PaymentPage
