import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_POST, ADD_COMMENT } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

function SinglePost(post) {
    const {
        User,
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
                <h1>Title of Post Goes Here</h1>
                <p>User</p>
                <p>{createdAt}</p>
                {/* image goes here */}
                <p>{reactions}</p>
                {/* description goes here once property in Post model is created */}
                <p>{comments}</p>

        </div>
    )
}