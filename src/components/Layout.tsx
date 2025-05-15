import { Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface LayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { session, signOut } = useAuth()

  return (
    <div className="layout">
      <nav className="nav">
        <div className="nav-inner">
          <h1 className="title">My App</h1>
          {session ? (
            <button
              onClick={signOut}
              className="sign-out-button"
              aria-label="Sign out of your account"
            >
              Sign Out
            </button>
          ) : null}
        </div>
      </nav>
      <main className="main">
        {children || <Outlet />}
      </main>
    </div>
  )
}