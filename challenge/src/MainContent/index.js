import React from 'react';
import PropTypes from 'prop-types';

import ConfirmedFilter from './ConfirmedFilter';
import ImageList from './ImageList';
import Counter from './Counter';
import SearchBox from './SearchBox';

const MainContent = props =>
<div className="main">
  <ConfirmedFilter
  toggleFilter={props.toggleFilter}
  isFiltered={props.isFiltered} />
  <SearchBox
  search={props.search}
  updateSearch={props.updateSearch} />
  <Counter
  totalInvited={props.totalInvited}
  numberConfirmed={props.numberConfirmed}
  numberUnconfirmed={props.numberUnconfirmed} />
  <ImageList
  images={props.images}
  filteredImages={props.filteredImages}
  toggleConfirmation={props.toggleConfirmation}
  toggleEditing={props.toggleEditing}
  setName={props.setName}
  isFiltered={props.isFiltered}
  removeImage={props.removeImage}
  pendingImage={props.pendingImage} />
</div>

MainContent.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  totalInvited: PropTypes.number.isRequired,
  numberConfirmed: PropTypes.number.isRequired,
  numberUnconfirmed: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  removeImage: PropTypes.func.isRequired,
  pendingImage: PropTypes.string.isRequired
}

export default MainContent;
