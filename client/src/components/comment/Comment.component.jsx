import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Comment = ({comment}) => {
  const {
    _id,
    userId,
    username,
    commentText,
    createdAt
  } = comment
  return (
    <Card className='bg-light mb-2' >
      <Link className="text-decoration-none h2" to={`/profiles/${username}`}>{username}</Link>
      <Card.Body>
        <Card.Text className='text-dark'>
          {commentText}
        </Card.Text>
        <Card.Text>
          <span>{createdAt}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Comment