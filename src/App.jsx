import { useState } from 'react'
import raccoon from './assets/raccoonatwork.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Under construction</h1>

      <img src={raccoon} style={{width: "50%"}}></img>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
