import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = props =>
<div className="searchBar">
<input type="text"
  className="searchBarPadding"
  value={props.search}
  onChange={props.updateSearch}
  placeholder="Select documents..." />
  </div>

SearchBox.propTypes = {
  search: PropTypes.string,
  updateSearch: PropTypes.func
}

export default SearchBox;
