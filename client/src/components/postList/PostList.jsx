import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({
    posts
}) => {
    if (!posts.length) {
        return <h3> No Posts Yet!</h3>
    }
    
}