import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Comment from '../comment/Comment.component';

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
	
	// local stateful variables
	const [likeCount, setLikeCount] = useState(0);
	const [dislikeCount, setDislikeCount] = useState(0);
	const [commentCount, setCommentCount] = useState(0);
	const [show, setShow] = useState(false);

	// sets the likeCount dislikeCount and commentCount variables on mount
	useEffect(() => {
		// get like count from length of filtered array
		const likes = reactions.filter(reaction => reaction.reactionType === 'like').length;
		const dislikes = reactions.filter(reaction => reaction.reactionType === 'dislike').length;
		
		// set counts
		setCommentCount(comments.length);
		setLikeCount(likes);
		setDislikeCount(dislikes);
		}, [likeCount, dislikeCount, commentCount]);

	// event handlers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
	const handleIncrement = (e) => {
		if (e.target.classList.contains("like")) {
			console.log('like')
		} else if (e.target.classList.contains("dislike")) {
			console.log("dislike")
		}
	}

	return (
		<>
			<Card >
				<Link to={`/profiles/${username}`}>{username}</Link>
				<div className="post-image">
					<Card.Img variant="top" src={image} />
				</div>
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
					<div id='btn-container' className='flex '>
						<Button variant="primary" onClick={handleShow}>
							{commentCount} Comments
						</Button>
						<Button className="like" variant="primary" onClick={handleIncrement}>
							{likeCount} Likes
						</Button>
						<Button className="dislike" variant="primary" onClick={handleIncrement}>
							{dislikeCount} Dislikes
						</Button>
					</div>
				</Card.Body>
			</Card>

			<Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-primary" closeButton>
          <Modal.Title className='text-light'>Comments</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-secondary'>
					{comments 
						? comments.map(comment => <Comment key={comment._id} comment={comment} />)
						: <p>No Comments yet</p>}
				</Modal.Body>
        <Modal.Footer className='bg-primary'>
          <Button variant="lighta" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
		</>
	)
};

export default Post;