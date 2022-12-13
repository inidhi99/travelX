import React from 'react';
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';
import { Post } from '../post/Post';


const PostList = ({ posts }) => {
    return (
      <div className='posts-list'>
        {posts.map(post => <Post key={post._id} post={post} />)}
      </div>

    // <div class="container">
    //     <Link to={`/${Post.userId}/posts/${_id}`}>
    //         <div class="row">
    //             <div class="card bg-dark text-white">
    //                 <img src={Post.image} class="card-img" alt="post-image"/>
    //                 <div class="card-img-overlay">
    //                     <h5 class="card-title">{Post.title}</h5>
    //                 </div>
    //             </div>
    //         </div>
    //     </Link>
    // </div>
    )
};

export default PostList;