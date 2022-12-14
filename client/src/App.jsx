import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import NavbarComponent from './components/navbar/NavbarComponent';
import NavbarComponent from "./components/navbarComponent/NavbarComponent";
import Main from "./components/main/MainComp";
import PostForm from "./pages/PostForm";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import Explore from './pages/Explore'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { GlobalProvider } from "./context/globalContext";
import Profile from "./pages/profile";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  HttpLink
} from '@apollo/client';

import { setContext } from "@apollo/client/link/context";

// Create main GraphQL API endpoint
const httpLink = new HttpLink({
  uri: "/graphql",
  credentials: "include"
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      "Access-Control-Allow-Origin": "*"
    },
  };
});

// execute the `authLink` middleware prior to making the request to our GraphQL API
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: "no-cors"
  }
});

function App() {
  const [count, setCount] = useState(0);

  return (
    // <>
    //   <AuthorizedApp />
    //   {/* <div className="App">
    //     <Router>
    //       <Header />
    //       <NavbarComponent />
    //       <Routes>
    //         <Route className="mainSection" path="/" element={<Main />} />
    //         <Route
    //           className="postForm"
    //           path="/pages/PostForm"
    //           element={<PostForm />}
    //         />
    //       </Routes>
    //       <Footer />
    //     </Router>
    //   </div> */}
    // </>
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <>
            <GlobalProvider>
              <Header />
              <NavbarComponent />
              <Routes>
                <Route className="mainSection" exact path="/" element={<Main />} />
                <Route
                  className="postForm"
                  path="/pages/PostForm"
                  element={<PostForm />}
                />
                <Route
                  className="signupForm"
                  path="/pages/SignupForm"
                  element={<SignupForm />}
                />
                <Route
                  className="loginForm"
                  path="/pages/LoginForm"
                  element={<LoginForm />}
                />
                <Route
                  className="explore"
                  path="/pages/explore"
                  element={<Explore />}
                />
                <Route 
                path="/me" 
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username"
                element={<Profile />}
              />
              </Routes>
              <Footer />
            </GlobalProvider>
          </>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;