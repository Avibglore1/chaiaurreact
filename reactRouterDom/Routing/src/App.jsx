import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold bg-yellow-50">
        Hello Tailwind!
      </h1>
    </>
  )
}

export default App
