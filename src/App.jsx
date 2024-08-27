import { useState } from 'react'
import './App.css'
import Nav from './components/nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav/>
        <Hero/>
        <About/>
        <Projects/>
    </>
  )
}

export default App
