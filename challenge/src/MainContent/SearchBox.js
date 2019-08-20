import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = props =>
<input type="text"
  value={props.search}
  onChange={props.updateSearch}
  placeholder="Select documents..." />;

SearchBox.propTypes = {
  search: PropTypes.string,
  updateSearch: PropTypes.func
}

export default SearchBox;
