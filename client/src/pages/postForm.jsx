import React from 'react';
import { Container, Form, InputGroup, Image } from 'react-bootstrap';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Upload photo
// add description
// add location - country city
// upload image
// date
// comments
// reactions

const postForm = () => {
  return (
    <>
      <p>This is the post page</p>
      <Container>
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
          <InputGroup.Text>Location</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
      </Container>
    </>
  );
};

export default postForm;
