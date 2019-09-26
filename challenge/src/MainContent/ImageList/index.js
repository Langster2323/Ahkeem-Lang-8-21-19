import React from 'react';

import Image from './Image';
import PendingImage from './PendingImage';

/*Sublist Component...
Successfully rendering itself
with data from the state.*/
const ImageList = props =>
/*toggleConfirmation... Closure...
*/
  <ul>
  <PendingImage name={props.pendingImage} />
  {props.filteredImages
    .filter(image => !props.isFiltered || image.isConfirmed)
    .map((image, index) =>
    <Image
    key={index}
    name={image.name}
    url={image.url}
    isConfirmed={image.isConfirmed}
    isEditing={image.isEditing}
    handleConfirmation={() => props.toggleConfirmation(image.id)}
    handleToggleEditing={() => props.toggleEditing(image.id)}
    setName={text => props.setName(text, image.id)}
    handleRemove={() => props.removeImage(image.id)} />
    )}
  </ul>;

export default ImageList;
