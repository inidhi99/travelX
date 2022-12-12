<<<<<<< HEAD
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
=======
import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
<<<<<<< HEAD
>>>>>>> 8ae6e46e666308b9e01feee42d3162e926996e5d
=======
// import Explore from './components/explore/explore';
>>>>>>> 954aaee5ffef0c614dacd18c86f761351cfc478d
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
