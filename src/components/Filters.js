import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();

    let state = {
      selected: 'all'
    }
  }

  handleChange = (event) => {
    this.setState({selected: event.target.value}, () => this.props.onChangeType(this.state.selected))
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleChange} selected={this.props.filters.type} value={this.props.filters.type} >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
