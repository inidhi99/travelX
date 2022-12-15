import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Component for rendering individual posts
const Post = ({ post }) => {
	// destructure post object into component varibles
	const { 
		_id,
		title, 
		body,
		userId,
		username, 
		city,
		image, 
		country, 
		comments, 
		reactions, 
		createdAt 
	} = post

	return (
  <Card >
		<Link to={`/profiles/${username}`}>{username}</Link>
      <div className="post-image"><Card.Img variant="top" src={image} /></div>
      <Card.Body >
        <Card.Title>{title}</Card.Title>
        <Card.Text>
		<span>{city}, {country}</span>
		<div>{body}</div>
		<div>{createdAt}</div>
        </Card.Text>
        <Card.Text>
					<span>{body}</span>
				</Card.Text>
        <Card.Text>
					<span>{createdAt}</span>
				</Card.Text>
      </Card.Body>
    </Card>
	)
};

export default Post;