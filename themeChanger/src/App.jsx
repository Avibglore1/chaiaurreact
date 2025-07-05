import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className='text-4xl text-gray-500 bg-pink-400'>Heading</h1>
    </>
  )
}

export default App
