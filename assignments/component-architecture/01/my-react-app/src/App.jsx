import { useState } from 'react'
import './App.css'
import Parent from './components/parent';

function App() {
  const [name, setName] = useState("");
  return (
    <div>
      <input onChange = {(event) => {
        setName(event.target.value);
      }}></input>
      <Parent name={name}/>
    </div>
  )
}

export default App
