import React from 'react';
import { Link } from 'react-router-dom';

function SinglePost(post) {
    const {
        User,
        title,
        country,
        city,
        image,
        createdAt,
        comments,
        reactions
    } = post;

    return (
        <div className="card px-1 py-1">
            <h5>{city}</h5>
            <h3>{country}</h3>
            <h1>{title}</h1>
            <Link to={`/${User}`}>
                <p>{User}</p>
            </Link>
            <p>{createdAt}</p>
            {/* image goes here */}
            <p>{reactions}</p>
            {/* description goes here once property in Post model is created */}
            <p>{comments}</p>
        </div>
    )
};

export default SinglePost;