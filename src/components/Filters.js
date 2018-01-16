import React from 'react';

const Filters = (props) => {
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select
        onChange={(ev) => props.onChangeType(ev.target.value)} 
        value={props.filters.type}
        name="type" 
        id="type">
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button 
        onClick={props.onFindPetsClick}
        className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
