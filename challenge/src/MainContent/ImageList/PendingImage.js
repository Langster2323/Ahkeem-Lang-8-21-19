import React from 'react';
import PropTypes from 'prop-types';

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

PendingImage.propTypes = {
  name: PropTypes.string.isRequired
};

export default PendingImage;
