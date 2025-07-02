import { useState } from 'react'
import './App.css'
function App() {
 const [counter,setCounter] = useState(5);
  const handleAdd = () =>{
    setCounter((prev)=>prev+1);
    setCounter((prev)=>prev+1);
    setCounter((prev)=>prev+1);
  }
  const handleReduce = ()=>{
   setCounter(prev=>prev-1);
   setCounter(prev=>prev-1);
   setCounter(counter-1);
  }
  return (
    <>
      <h1 className='font-bold bg- text-2xl'>Chai aur React</h1>
      <h2 className='p-6 bg-yellow-400'>Counter: {counter}</h2>
      <button onClick={handleAdd}>Increment</button>
      <button onClick={handleReduce}>Decrement</button>
    </>
  )
}

export default App
