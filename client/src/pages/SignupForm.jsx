import React from 'react';

import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    <>
       
       <p>This is the Sign up page</p>

       <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center p-3 w-100">
    
        <h1 className="mb-3 fs-3 fw-normal">Please Sign Up</h1>

        <Form.Group controlId="sign-in-first-name"> First Name
          <Form.Control type="name"  placeholder=" First Name " name="username" />
        </Form.Group>

        <Form.Group controlId="sign-in-last-name"> Last Name
          <Form.Control type="text"  placeholder=" Last Name " name="username" />
        </Form.Group>

        <Form.Group controlId="sign-in-username">@ 
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        </Form.Group>


        <Form.Group controlId="sign-in-email-address"> Email Address
          <Form.Control type="email"  placeholder="Email" name="username" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="sign-in-password"> Password
          <Form.Control type="password" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative" />
        </Form.Group>

        <Link className="linkStyles" to="/explore">
        <Button variant="primary" size="lg"> Sign UP </Button>
        </Link>


      </Form>
    </Container>

    </>

  );
};

export default SignupForm;

// import React, { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';


// import { ADD_USER } from '../utils/mutations';
// import Auth from '../utils/auth';
// import { useMutation } from '@apollo/client';

// const SignupForm = () => {
//   // set initial form state
//   const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
//   // set state for form validation
//   const [signup, { error }] = useMutation(ADD_USER);
//   const [validated] = useState(false);
//   // set state for alert
//   const [showAlert, setShowAlert] = useState(false);

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   const handleFormSubmit = async event => {
//     event.preventDefault();

//     // check if form has everything (as per react-bootstrap docs)
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     try {
//       const { data } = await signup({
//         variables: { ...userFormData },
//       });
//       Auth.login(data.signup.token);
//     } catch (err) {
//       console.error(err);
//       setShowAlert(true);
//     }

//     setUserFormData({
//       username: '',
//       email: '',
//       password: '',
//     });
//   };

//   return (
//     <>
//       {/* This is needed for the validation functionality above */}
//       <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//         {/* show alert if server response is bad */}
//         <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant="danger">
//           Something went wrong with your signup!
//         </Alert>

//         <Form.Group>
//           <Form.Label htmlFor="username">Username</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Your username"
//             name="username"
//             onChange={handleInputChange}
//             value={userFormData.username}
//             required
//           />
//           <Form.Control.Feedback type="invalid">Username is required!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor="email">Email</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Your email address"
//             name="email"
//             onChange={handleInputChange}
//             value={userFormData.email}
//             required
//           />
//           <Form.Control.Feedback type="invalid">Email is required!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor="password">Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Your password"
//             name="password"
//             onChange={handleInputChange}
//             value={userFormData.password}
//             required
//           />
//           <Form.Control.Feedback type="invalid">Password is required!</Form.Control.Feedback>
//         </Form.Group>
//         <Button
//           disabled={!(userFormData.username && userFormData.email && userFormData.password)}
//           type="submit"
//           variant="success"
//         >
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default SignupForm;