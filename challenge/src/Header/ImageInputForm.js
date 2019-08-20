import React from 'react';
import PropTypes from 'prop-types';

const ImageInputForm = ({ newImageSubmitHandler, handleNameInput, pendingImage }) =>
  <form onSubmit={newImageSubmitHandler}>
      <input
      type="file"
      onChange={handleNameInput}
      value={pendingImage} />
      <button type="submit" name="submit" value="submit">Submit</button>
  </form>

  ImageInputForm.propTypes = {
    newImageSubmitHandler: PropTypes.func.isRequired,
    pendingImage: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
  }

export default ImageInputForm;
