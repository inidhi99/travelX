import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { ADD_COMMENT } from '../../utils/mutations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Post from '../post/Post';

const CommentForm = ({ onSubmit, onChange }) => {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Comment Text</Form.Label>
          <Form.Control type="text" placeholder="Comment..." onChange={onChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CommentForm