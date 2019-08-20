import React from 'react';
import PropTypes from 'prop-types';

import ImageInputForm from './ImageInputForm';

const Header = ({ newImageSubmitHandler, pendingImage, handleNameInput }) =>
  <header>
    <h1>Image Loader App</h1>
    <ImageInputForm
    newImageSubmitHandler={newImageSubmitHandler}
    pendingImage={pendingImage}
    handleNameInput={handleNameInput} />
  </header>

  Header.propTypes = {
    newImageSubmitHandler: PropTypes.func.isRequired,
    pendingImage: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
  };

  export default Header;
