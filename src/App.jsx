import { useState } from 'react'
import './App.css'
function App() {
 const [counter,setCounter] = useState(5);
  const handleAdd = () =>{
    if(counter<=19) setCounter(counter+1);
    
  }
  const handleReduce = ()=>{
    if(counter>=1) setCounter(counter-1);
    
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={handleAdd}>Increment</button>
      <button onClick={handleReduce}>Decrement</button>
    </>
  )
}

export default App
