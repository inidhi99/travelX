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
<<<<<<< HEAD
		<div className="card px-1 py-1">
				<h2>{title}</h2>
				<h3>{city}</h3>
				<h5>{country}</h5>
				<Link to={`/profiles/${username}`}>
						<p>{username}</p>
				</Link>
				<p>{body}</p>
				<p>{createdAt}</p>
				{/* image goes here */}
				{/* <p>{reactions}</p> */}
				{/* <p>{comments}</p> */}
		</div>
=======
   <Card >
	 <Link to={`/${userId}`}> <p>{username}</p> </Link>
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
	
>>>>>>> 3a4456fd62c2da8ec97743c60e98252a18dc1db9
	)
};

export default Post;