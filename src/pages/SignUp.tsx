import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import AuthForm from '../components/AuthForm'
import { useState } from 'react'

const SignUp: React.FC = () => {
  const [signUpSuccess, setSignUpSuccess] = useState(false)
  const navigate = useNavigate()
  const { signUp } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const password = (form.elements.namedItem('password') as HTMLInputElement).value
    const { error } = await signUp({ email, password })
    if (error) {
      throw error // Let AuthForm handle the error display
    } else {
      setSignUpSuccess(true)
    }
  }

  const handleLoginRedirect = () => {
    navigate('/login')
  }

  return (
    <div>
      {signUpSuccess ? (
        <div className="auth-form">
          <p>
            Please check your email for instructions to confirm your account or log in.{' '}
            <span
              className="link"
              onClick={() => navigate('/login')}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/login')}
            >
              Go to Login
            </span>
          </p>
        </div>
      ) : (
        <AuthForm
          title="Sign Up"
          onSubmit={handleSubmit}
          submitLabel="Sign Up"
        >
          <p>
            Already have an account?{' '}
            <span
              className="link"
              onClick={handleLoginRedirect}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleLoginRedirect()}
            >
              Login.
            </span>
          </p>
        </AuthForm>
      )}
    </div>
  )
}

export default SignUp