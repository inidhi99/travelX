import React, { useState, useEffect } from "react";
import PostList from "../components/postList/PostList";
import { useQuery } from '@apollo/client'
import { useGlobalContext } from '../context/globalContext';
import { UPDATE_POSTS } from '../context/actions';
import { QUERY_POSTS } from '../utils/queries';
import SearchBox from "../components/SearchBox/search-box.component";


const Explore = () => {
  const [state, dispatch] = useGlobalContext();
  const [searchField, setSearchField] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  const { loading, data } = useQuery(QUERY_POSTS);
    if (!state.posts.length) {
        return <h3> No Posts Yet!</h3>
    }

    useEffect(() => {
      const newFilteredPosts = data.filter(post => post.city.toLocaleLowerCase().includes(searchField));

      setFilteredPosts(newFilteredPosts)
    }, [data, searchField]);

    const onSearchChange = e => {
      const searchFieldString = e.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    };

  return (
    <div className="container">
      <SearchBox className="posts-search-box" placeholder="search posts" onChangeHandler={onSearchChange} />
      <PostList posts={filteredPosts} />
    </div>
  );
};

export default Explore;
