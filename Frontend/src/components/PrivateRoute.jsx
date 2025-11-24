import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext)

  if (!user) {
    // User is not authenticated, redirect to login
    return <Navigate to="/login" replace />
  }

  // User is authenticated, render child components
  return children
}

export default PrivateRoute
