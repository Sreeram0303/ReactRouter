import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'


function App() {
  const [count, setCount] = useState(0)
// when using react router dom we can't directly render the app component so we mostly work in the main.jsx file
  return (
    <>
      {/* <Header /> */}
    </>
  )
}

export default App
