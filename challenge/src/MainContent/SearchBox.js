import React from 'react';

const SearchBox = props =>
<div className="searchBar">
<input type="text"
  className="searchBarPadding"
  value={props.search}
  onChange={props.updateSearch}
  placeholder="Select documents..." />
  </div>

export default SearchBox;
