import { useEffect } from 'react'
import LandingPage from './components/landing-page'

function App() {
  // Ensure we're always at the root URL
  useEffect(() => {
    if (window.location.pathname !== '/') {
      window.history.replaceState({}, '', '/')
    }
  }, [])

  const handleLoginClick = () => {
    console.log('Login clicked!')
    // Ensure we stay at the root URL
    window.history.replaceState({}, '', '/')
    // Add your login logic here
  }

  return (
    <LandingPage onLoginClick={handleLoginClick} />
  )
}

export default App