import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Post.css'


const Post = ({ post }) => {
	const { 
		_id,
		title, 
		body,
		userId,
		username, 
		city, 
		country, 
		comments, 
		reactions, 
		createdAt 
	} = post

	return (
   <Card id="post-card">
		<Link to={`/profiles/${username}`} id="username">{username}</Link>
      <div><Card.Img variant="top" src="holder.js/100px180" id='image'/></div>
      <Card.Body>
        <Card.Title id="card-title">{title}</Card.Title>
        <Card.Text id="card-location">
					<span>{city}, {country}</span>		
        </Card.Text>
        <Card.Text id="card-text">
					<span>{body}</span>
				</Card.Text>
        <Card.Text id="card-date">
					<span>{createdAt}</span>
				</Card.Text>
      </Card.Body>
    </Card>
	
	)
};

export default Post;