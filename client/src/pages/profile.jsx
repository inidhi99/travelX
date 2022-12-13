import React, { useState } from 'react';
import PostList from '../components/postList/PostList'
// import { Navigate, useParams, Link } from 'react-router-dom';
// import { useQuery, useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
// import {  } from '../utils/mutations';
// import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';

const Profile = () => {
    // const { username: userParam } = useParams();

    // // if there is no username in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's informtaion
    // const { loading, data } = useQuery(userParam ? QUERY_SINGLE_USER : QUERY_ME, {
    //     variables: { username: userParam },
    // });

    // // check if the data is returned from the `QUERY_ME` query, then the `QUERY_SINGLE_USER` query
    // const user = data?.me || data?.user | {};

    // // user React Router's redirect component to redirect to personal profile page if username is yours
    // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //     return <Navigate to="/me" />;
    //   }
    
    //   if (loading) {
    //     return <div>Loading...</div>;
    //   }
    
    //   if (!user?.username) {
    //     return (
    //       <h4>
    //         Sorry 😕 You need to be logged in to see this. Use the navigation links above to sign up or log in!
    //       </h4>
    //     );
    //   };

      return (
        <div>
            <h1>User Profile Goes Here</h1>
            <div className="flex-row justify-center mb-3">
                {/* username header */}
                <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
                    {`${user.username}`}
                </h2>
                {/* profile picture */}

                {/* posts */}
                <PostList/>
            </div>
        </div>
      );
    };
    
    export default Profile;