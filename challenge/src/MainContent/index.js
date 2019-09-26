import React from 'react';

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
  url={props.url}
  pendingImage={props.pendingImage} />
</div>

export default MainContent;
