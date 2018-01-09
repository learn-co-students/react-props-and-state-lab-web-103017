import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
import {getAll} from '../data/pets'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: getAll(),
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onAdoptPet = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  onChangeType = filterType => {
    this.setState({
      filters: {
        type: filterType
      }
    })
  }

  onFindPetsClick = () => {
    let filterType = this.state.filters.type;
    let apiCall;
    if (filterType === 'cat') {
      apiCall = '?type=cat'
    } else if (filterType === 'dog') {
      apiCall = '?type=dog'
    } else if (filterType === 'micropig') {
      apiCall = '?type=micropig'
    }
    else {
      apiCall = ''
    }
    fetch(`/api/pets${apiCall}`).then(resp => resp.json())
  }

  render() {
    console.log(this.state.filters.type)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters.type} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
