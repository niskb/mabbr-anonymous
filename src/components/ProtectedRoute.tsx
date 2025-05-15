import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const ProtectedRoute: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth()

  if (!user) {
    // Redirect to login if user is null
    return <Navigate to="/login" replace />
  }

  return children ? children : <Outlet />
}

export default ProtectedRoute