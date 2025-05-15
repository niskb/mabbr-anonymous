import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)

const handleReset = () => {
  window.location.reload()
}

root.render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset} resetKeys={['app']}>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
)