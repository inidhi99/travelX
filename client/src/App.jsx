import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/navbar/Navbar';
import Main from './components/main/Main';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Main className="mainSection" />
      <Footer />
    </div>
  );
}

export default App;
