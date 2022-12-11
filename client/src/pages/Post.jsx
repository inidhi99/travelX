import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';

// Post photo
// add description
// add loaction - country city
// upload image
// login and signup of not logged in
// date
// comments
// reactions
const Post = () => {
  return (
    <>
      <Container>
        <p>This is the post page</p>
        {/* Image section */}

        <div style={{ display: 'block', width: 700, padding: 30 }}>
          <h4>Image Goes Below</h4>
          <Image
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
            roundedCircle
          />
        </div>

        {/* Text area */}
        <InputGroup size="lg">
          <InputGroup.Text>Add Description</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        <InputGroup size="md">
          <InputGroup.Text>Location</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
      </Container>
    </>
  );
};

export default Post;
