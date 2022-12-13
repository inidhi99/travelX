// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function NavbarComponent() {
//   return (
//     <>
//       <Navbar bg="primary" variant="dark" fixed="bottom">
//         <Container>
//           <Nav className="navbar">
//             {/* Temporary */}
//             <Link className="link" to="./pages/explore">Explore</Link>
//             <Link className="link" to="./pages/PostForm">Post</Link>
//             <Link className="link" to="./pages/profile">Profile</Link>
//             {/* Login should only show if user isn't logged in */}
//             <Link className="link" to="/pages/LoginForm">Login</Link>

//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavbarComponent;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="bottom">
        <Container>
          <Nav className="me-auto">
<<<<<<< HEAD
            {/* Temporary */}
            <Link className="linkStyles" to="./pages/postForm">Post</Link>
            <Link className="linkStyles" to="./pages/Profile">Profile</Link>
            <Link className="linkStyles" to="./pages/Explore">Explore</Link>
=======
            {/* <Link className="linkStyles" to="./pages/postForm">Post</Link> */}
            <Link className="linkStyles" to="./pages/Profile">
              Profile
            </Link>
            <Link className="linkStyles" to="./pages/Explore">
              Explore
            </Link>
            <Link className="linkStyles" to="./pages/PostForm">
              Post
            </Link>

>>>>>>> 97ad8e261b36a5c97fd2239ef8546351920b856f
            <Link className="linkStyles" to="./pages/LoginForm">
              login
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
