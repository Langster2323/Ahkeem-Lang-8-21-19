import React from 'react';

const ConfirmedFilter = props =>
  <div>
    <h2>Images</h2>
    <label>
      <input
      type="checkbox"
      onChange={props.toggleFilter}
      checked={props.isFiltered} /> Hide those who have not responded
    </label>
  </div>

  export default ConfirmedFilter;
