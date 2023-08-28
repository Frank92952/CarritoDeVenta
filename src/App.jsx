import { useState } from 'react'
import { FaBeer } from 'react-icons/fa';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <h3> Lets go for a <FaBeer />? </h3>
    </>
  )
}

export default App
