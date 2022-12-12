import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import {
  ApolloProvider
} from '@apollo/client';
// import Explore from './components/explore/explore';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//importing pages 
// import Detail from './pages/Detail';
import Explore from './pages/Explore'
import Home from "./pages/Home";
import Login from './pages/LoginForm';
import SignupForm from './pages/SignupForm';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Main className="mainSection" />
      <Footer />
      <ApolloProvider client={client}>
      <Router>
        <div>
    
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              {/* <Route 
                path="/detail" 
                element={<Detail />} 
              /> */}
              <Route 
                path="/explore" 
                element={<Explore />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/Signup" 
                element={<SignupForm />} 
              />
              <Route 
                path="/post" 
                element={<Post />} 
              />
              <Route 
                path="/profile" 
                element={<Profile />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>
        </div>
      </Router>
    </ApolloProvider>
    </div>
  );
}

export default App;