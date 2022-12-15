import React, { useState } from 'react';
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

	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
					<div>
						<Button variant="primary" onClick={handleShow}>
							View Comments
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
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
		</>
	)
};

export default Post;