import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FrontDashboard from './pages/frontend/dashboard/FrontDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FrontDashboard />
    </>
  )
}

export default App
