import './search-box.css';

const SearchBox = ({className, placeholder, onChangeHandler}) => {
  return (
    <div id='searchbox'>
      <input className={`search-box ${className}`} type="search" placeholder={placeholder} onChange={onChangeHandler} id="searchbar"/>
    </div>
  )
}

export default SearchBox;