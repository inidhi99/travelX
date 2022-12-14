import React, { useState, useEffect } from "react";
import PostList from "../components/postList/PostList";
import { useQuery } from '@apollo/client'
import { useGlobalContext } from '../context/globalContext';
import { QUERY_POSTS } from '../utils/queries';
import SearchBox from "../components/SearchBox/search-box.component";

// Page for rendering all posts and searching through them
const Explore = () => {
  const [state, dispatch] = useGlobalContext();
  // local stateful variables
  const [searchField, setSearchField] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  // query gets all posts from Database
  const { loading, data } = useQuery(QUERY_POSTS);

  // filters posts using the stateful variable tied to SearchBox component
  useEffect(() => {
    if (data) {
      const newFilteredPosts = data.posts.filter(post => post.city.toLocaleLowerCase().includes(searchField));

      setFilteredPosts(newFilteredPosts)
    }

  }, [data, searchField]);

  // event handler for SearhBox input element
  const onSearchChange = e => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="container">
      Explore the World!!
      <SearchBox className="posts-search-box" placeholder="search posts" onChangeHandler={onSearchChange} />
      <PostList posts={filteredPosts} />
    </div>
  );
};

export default Explore;
