// import React, { useState } from 'react';
import { Navigate, useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import PostList from "../components/postList/PostList";
// import {  } from '../utils/mutations';
import { QUERY_SINGLE_USER, QUERY_ME } from "../utils/queries";
import './profile.css';

// import PostList from '../components/postList';
// import PostForm from './PostForm';

const Profile = () => {
  const { username } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(username ? QUERY_SINGLE_USER : QUERY_ME, {
    variables: { username: username },
  });
  // userId ? QUERY_SINGLE_PROFILE : QUERY_ME,
  //   {
  //     variables: { userId: userId },
  //   }
  // );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.user || {};
  console.log(profile);

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
  //   return <Navigate to="/me" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.username) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div id="profile">
      <h2 id="user-name">{profile.username}</h2>
      {/* <h2 className="card-header">
        {profile.email}
      </h2> */}
      <div className="profile-section">
        <h2 id="followers">Followers</h2>
        {profile.followers.length &&
          profile.followers.map((follower, index) => {
            return <h3 key={index}>{follower.username}</h3>;
          })}
      </div>
      <div className="profile-section">
        <h2 id="following">Following</h2>
        <div>
          {profile.following.length &&
            profile.following.map((followee, index) => {
              return <h3 key={index}>{followee.username}</h3>;
            })}
        </div>
      </div>
      <div>
        <h2 id="posts">Posts</h2>
        <div>{profile.posts.length && <PostList posts={profile.posts} />}</div>
      </div>

        {/* {profile.skills?.length > 0 && (
          <SkillsList
            skills={profile.skills}
            isLoggedInUser={!profileId && true}
          />
        )}

        <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
          <SkillForm profileId={profile._id} />
        </div> */}
    </div>
  );
};

// return (
//   <div>
//     <h2 className="card-header">
//       {userId ? `${user.username}'s` : 'Your'} friends have endorsed these
//       posts...
//     </h2>

//     {profile.posts?.length > 0 && (
//       <PostList
//         posts={profile.posts}
//         isLoggedInUser={!userId && true}
//       />
//     )}

//     <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
//       <SkillForm userId={user._id} />
//     </div>
//   </div>
// );
// };

export default Profile;

// return (
//     <div>
//         <div className="flex-row justify-center mb-3">
//             {/* username header */}
//             <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
//                 {`${user.username}`}
//             </h2>
//             {/* profile picture */}
//             {/* posts */}
//             <p>Posts coming soon!</p>
//         </div>
//     </div>
//   );
// };

// export default Profile;

// const { username: userParam } = userParams();

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

//   return (
//     <div>
//         <div className="flex-row justify-center mb-3">
//             {/* username header */}
//             <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
//                 {`${user.username}`}
//             </h2>
//             {/* profile picture */}
//             {/* posts */}
//             <p>Posts coming soon!</p>
//         </div>
//     </div>
//   );
// };

// export default Profile;
