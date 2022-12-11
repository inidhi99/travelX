import React, { useState } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import {  } from '../utils/mutations';
import { QUERY_SINGLE_USER, QUERY_ME, QUERY_POSTS } from '../utils/queries';

const Profile = () => {
    const { username: userParam } = userParams();

    // if there is no username in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's informtaion
    const { loading, data } = useQuery(userParam ? QUERY_SINGLE_USER : QUERY_ME, {
        variables: { username: userParam },
    });

    // check if the data is returned from the `QUERY_ME` query, then the `QUERY_SINGLE_USER` query
    const user = data?.me || data?.user | {};

    
}