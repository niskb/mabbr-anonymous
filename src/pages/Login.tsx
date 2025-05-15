import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import AuthForm from '../components/AuthForm'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { signIn, resetPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const password = (form.elements.namedItem('password') as HTMLInputElement).value
    const { error } = await signIn({ email, password })
    if (error) {
      throw error // Let AuthForm handle the error display
    } else {
      navigate('/dashboard')
    }
  }

  const handleSignUpRedirect = () => {
    navigate('/signup')
  }

  const handleForgotPassword = async () => {
    const emailInput = document.getElementById('email') as HTMLInputElement
    const email = emailInput?.value || (prompt('Enter your email address to reset your password:') || '')
    if (email) {
      const { error } = await resetPassword(email)
      if (error) {
        throw error // Let AuthForm handle the error display
      } else {
        alert('Check your email for password reset instructions.')
      }
    }
  }

  return (
    <div>
      <AuthForm
        title="Login"
        onSubmit={handleSubmit}
        submitLabel="Login"
      >
        <p>
          Don't have an account?{' '}
          <span
            className="link"
            onClick={handleSignUpRedirect}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleSignUpRedirect()}
          >
            Sign up.
          </span>
        </p>
        <p>
          <span
            className="link"
            onClick={handleForgotPassword}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleForgotPassword()}
          >
            Forgot Password?
          </span>
        </p>
      </AuthForm>
    </div>
  )
}

export default Login