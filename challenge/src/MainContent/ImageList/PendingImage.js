import React from 'react';

const PendingImage = props => {
  if(props.name) {
    return (
    <li className="pending">
      <span>
      {props.name}
      </span>
    </li>
    );
  }
  return null;
};

export default PendingImage;
