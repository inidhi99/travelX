import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../post/Post';

// Component for rendering Post components for all posts
const PostList = ({ posts }) => {
    return (
      <div id="post-container" className='posts-list'>
        {posts ? posts.map(post => <Post key={post._id} post={post} />) : <p>No Posts Yet</p>}
      </div>
    )
};

export default PostList;