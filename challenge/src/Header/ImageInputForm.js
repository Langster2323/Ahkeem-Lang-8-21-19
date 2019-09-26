import React from 'react';

const ImageInputForm = ({ newImageSubmitHandler, handleNameInput, pendingImage }) =>
  <div className="form">
      <input
      type="file"
      name="image"
      id="image"
      onChange={handleNameInput}
       />
      <button className="button" onClick={newImageSubmitHandler} type="button" name="submit" value="submit">Submit</button>
  </div>

export default ImageInputForm;
