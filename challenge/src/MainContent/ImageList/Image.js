import React from 'react';
import ImageName from './ImageName';

const Image = props =>
<li>
  <ImageName
  isEditing={props.isEditing}
  handleNameEdits={e => props.setName(e.target.value)}>
  <img src={props.url} width="100" />
  {props.name}
  </ImageName>
  <label>
    <input
    type="checkbox"
    checked={props.isConfirmed}
    onChange={props.handleConfirmation} /> Confirmed
  </label>
  <button onClick={props.handleToggleEditing}>
    {props.isEditing ? "save" : "edit"}
  </button>
  <button onClick={props.handleRemove}>remove</button>
</li>;

export default Image;
