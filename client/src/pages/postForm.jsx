// import React from 'react';
import { Container, Form, InputGroup, Image } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
// Upload photo
// add description
// add location - country city
// upload image
// date
// comments
// reactions

const PostForm = () => {
  return (
    <>
      <p>This is the post page</p>

      <Container>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />

        <div style={{ display: 'block', width: 700, padding: 30 }}>
          <h4>Image Goes Below</h4>
          <Image
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
            roundedCircle
          />
        </div>

        <InputGroup size="lg">
          <InputGroup.Text>Add Description</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        <InputGroup size="md">
          <InputGroup.Text>Add Location</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
      </Container>
    </>
  );
};

export default PostForm;
