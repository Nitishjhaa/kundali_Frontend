import { useState } from 'react'
import Kundali from './components/kundali'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Kundali /> 
    </>
  )
}

export default App
