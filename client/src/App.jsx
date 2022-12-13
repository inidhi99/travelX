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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { GlobalProvider } from "./context/globalContext";
// import Explore from './components/explore/explore';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import ApolloProvider

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// Create main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// execute the `authLink` middleware prior to making the request to our GraphQL API
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

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
      <Router>
        <>
          <GlobalProvider>
            <Header />
            <NavbarComponent />
            <Routes>
              <Route className="mainSection" path="/" element={<Main />} />
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
            </Routes>
            <Footer />
          </GlobalProvider>
        </>
      </Router>
    </div>
  );
}

export default App;