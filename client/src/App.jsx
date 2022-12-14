import { useState } from "react";
import "./App.css";
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
import AuthorizedApp from "./components/authorizedApp/AuthorizedApp";
import UnauthorizedApp from "./components/unauthorizedApp/unauthorizedApp";
import auth from "./utils/auth";

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

  const [loggedIn, setLoggedIn] = useState(false)
  const login = () => setLoggedIn(true);
  const logout =() => setLoggedIn(false)


  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
            <GlobalProvider>
<<<<<<< HEAD
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
=======
              <AuthorizedApp />
>>>>>>> 3a4456fd62c2da8ec97743c60e98252a18dc1db9
            </GlobalProvider>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;