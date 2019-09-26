import React from 'react';
import PropTypes from 'prop-types';

const ImageInputForm = ({ newImageSubmitHandler, handleNameInput, pendingImage }) =>
  <div>
      <input
      type="file"
      name="image"
      id="image"
      onChange={handleNameInput}
       />
      <button onClick={newImageSubmitHandler} type="button" name="submit" value="submit">Submit</button>
  </div>

  ImageInputForm.propTypes = {
    newImageSubmitHandler: PropTypes.func.isRequired,
    pendingImage: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
  }

export default ImageInputForm;
