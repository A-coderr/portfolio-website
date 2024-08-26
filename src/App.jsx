import { useState } from 'react'
import './App.css'
import Nav from './components/nav';
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav/>
        <Hero/>
    </>
  )
}

export default App
