import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
