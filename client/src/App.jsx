import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { GlobalProvider } from "./context/globalContext";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from "@apollo/client/link/context";
import AuthorizedApp from "./components/authorizedApp/AuthorizedApp";

// Create main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// execute the `authLink` middleware prior to making the request to our GraphQL API
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
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
              <AuthorizedApp />
            </GlobalProvider>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;