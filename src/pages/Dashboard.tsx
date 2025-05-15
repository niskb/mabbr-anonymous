import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await signOut()
      navigate('/login')
    } catch (error) {
      console.error('Sign-out failed:', error)
    }
  }

  // Redirect to login if user is null (additional safeguard)
  if (!user) {
    navigate('/login')
    return null // Prevent rendering until navigation occurs
  }

  return (
    <div className="p-2 bg-gray-800 rounded-lg shadow-lg" style={{ color: '#f9fafb' }}>
      <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">
        Welcome, {user.email}
      </h2>
    </div>
  )
}

export default Dashboard