import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
   <Card >
		<Link to={`/profiles/${username}`}>{username}</Link>
      <div><Card.Img variant="top" src="holder.js/100px180" /></div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
					<span>{city}, {country}</span>		
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