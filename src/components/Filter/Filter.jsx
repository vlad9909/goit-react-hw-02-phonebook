import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Пошук <input type="text" name="filter" value={value} onChange={onChange} />
  </label>
);

export default Filter;
