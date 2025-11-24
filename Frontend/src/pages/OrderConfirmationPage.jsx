import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/global.css'

function OrderConfirmationPage() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <h2>Thank You for Your Order!</h2>
        <p>Your payment was successful.</p>
        <p>Your order is being processed and will be shipped soon.</p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  )
}

export default OrderConfirmationPage
