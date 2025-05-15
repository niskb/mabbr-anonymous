import React from 'react'

interface AuthFormProps {
  title: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  submitLabel: string
  children?: React.ReactNode
}

export default function AuthForm({ title, onSubmit, submitLabel, children }: AuthFormProps) {
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      await onSubmit(e)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-form">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : submitLabel}
        </button>
      </form>
      {children}
    </div>
  )
}