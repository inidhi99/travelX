import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../post/Post';
import './PostList.css';

const PostList = ({ posts }) => {
  return (
    <div id="posts">
      <div id="post-list">
        {posts ? posts.map(post => <Post key={post._id} post={post} />) : <p>No Posts Yet</p>}
      </div>
    </div>
)};

export default PostList;