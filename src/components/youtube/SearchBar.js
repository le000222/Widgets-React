import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term, 20);
  };

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onSubmit} className='ui form'>
        <div className='field'>
          <label className='label'>Video Search:</label>
          <input
            className='input'
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
