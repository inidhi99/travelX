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
}