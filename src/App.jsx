import { useState } from 'react'
import FirstGame from './Components/FirstGame'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <FirstGame/>
    </>
  )
}

export default App
