import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();
  }

  handleFilterTypeChange = event => {
    this.props.onChangeType(event.target.value)
  }

  render() {
    const { filters, onFindPetsClick } = this.props
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select
            name="type"
            id="type"
            value={filters.type}
            onChange={this.handleFilterTypeChange}
            >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
