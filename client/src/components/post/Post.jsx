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
<Link to={`/profiles/${username}`}>
	<p>{username}</p>
				</Link>
	 {/* <Link to={`/${userId}`}> <p>{username}</p> </Link> */}
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
		<span>{city}, {country}</span>
		<div>{body}</div>
		<div>{createdAt}</div>
        </Card.Text>
      </Card.Body>
    </Card>
	
	)
};

export default Post;