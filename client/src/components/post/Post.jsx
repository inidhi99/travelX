import React from 'react';
import { Link } from 'react-router-dom';

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
	)
};

export default Post;