import React, { useState } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import {  } from '../utils/mutations';
import { QUERY_USRES, QUERY_SINGLE_USER, QUERY_POSTS } from '../utils/queries';

