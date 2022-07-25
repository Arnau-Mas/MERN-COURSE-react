import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Taula from './Taula';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        {/* <h1>Ciutats</h1> */}
        <Taula/>
      </div>
    </div>
  )
}

export default App
