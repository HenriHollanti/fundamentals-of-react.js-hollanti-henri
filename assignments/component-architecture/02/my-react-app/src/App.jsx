import { useState } from 'react'
import './App.css'
import Toggle from './components/toggle'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("Welcome!");

  function handleToggle() {
    if (isLoggedIn === "Welcome!") {
      setIsLoggedIn("Please sign in.");
    } else {
      setIsLoggedIn("Welcome!");
    }
  }
  return (
    <div>
      <h1>{isLoggedIn}</h1>
      <Toggle toggle={handleToggle} />
    </div>
  )
}

export default App
