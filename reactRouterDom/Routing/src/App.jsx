import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-5xl font-normal bg-yellow-50">
        Hello Tailwind!
      </h1>
    </>
  )
}

export default App
