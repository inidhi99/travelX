import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';
import { Post } from '../post/Post';
import { useGlobalContext } from '../../context/globalContext';
import { UPDATE_POSTS } from '../../context/actions';
import { QUERY_POSTS } from '../../utils/queries';

const PostList = () => {
  const [state, dispatch] = useGlobalContext();
  const [filteredPosts, setFilteredPosts] = useState([]);

  const { loading, data } = useQuery(QUERY_POSTS);
    if (!state.posts.length) {
        return <h3> No Posts Yet!</h3>
    }
    
    return (
    <div class="container">
        <Link to={`/${Post.userId}/posts/${_id}`}>
            <div class="row">
                <div class="card bg-dark text-white">
                    <img src={Post.image} class="card-img" alt="post-image"/>
                    <div class="card-img-overlay">
                        <h5 class="card-title">{Post.title}</h5>
                    </div>
                </div>
            </div>
        </Link>
    </div>
    )
};

export default PostList;