import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Search photo
// add description
// add loaction - country city
// login and signup of not logged in
// date
// comments
// reactions
const Post = () => {
  return (
    <>
      <p>This is the post page</p>
      <>
        <InputGroup size="lg">
          <InputGroup.Text>Write a caption...</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        ;
      </>
    </>
  );
};
export default Post;
