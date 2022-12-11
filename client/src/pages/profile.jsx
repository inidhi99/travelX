import React, { useState } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import {  } from '../utils/mutations';
import { QUERY_SINGLE_USER, QUERY_ME, QUERY_POSTS } from '../utils/queries';

const Profile = () => {
    const { username: userParam } = userParams();

    const { loading, data } = useQuery(userParam ? QUERY_SINGLE_USER : QUERY_ME, {
        variables: { username: userParam },
    });

    
}