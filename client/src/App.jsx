import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/navbar/Navbar';
import Main from './components/main/Main';
import postForm from './pages/postForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route className="mainSection" path="/" element={<Main />} />
          <Route
            className="postForm"
            path="/pages/postForm"
            element={<postForm />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
