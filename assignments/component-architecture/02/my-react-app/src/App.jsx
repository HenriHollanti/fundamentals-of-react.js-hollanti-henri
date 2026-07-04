import { useState } from 'react'
import './App.css'
import Toggle from './components/toggle'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function handleToggle() {
    if (isLoggedIn === true) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }
  return (
    <div>
      {isLoggedIn ? <p>Welcome!</p> : <p>Please sign in.</p>}
      <Toggle toggle={handleToggle} />
    </div>
  )
}

export default App
