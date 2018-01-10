import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onChangeType = (selected) => {
    this.setState({filters: {...this.state.filters, type: selected}})
  }

  onAdoptPet = (id) => {
    this.state.adoptedPets.push(id)
  }

  onFindPetsClick = () => {
    let searchQuery
    switch (this.state.filters.type) {
      case 'all':
        searchQuery = "pets"
        break;
      case 'cat':
        searchQuery = "pets?type=cat"
        break;
      case 'dog':
        searchQuery = "pets?type=dog"
        break;
      case 'micropig':
        searchQuery = "pets?type=micropig"
        break;
    }

    fetch(`/api/${searchQuery}`).then(resp => resp.json()).then(json => this.state.pets = json)
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick } filters={this.state.filters}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
