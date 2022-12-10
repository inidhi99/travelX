import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Main className='mainSection'/>
      <Footer />
    </div>
  );
}

export default App;
