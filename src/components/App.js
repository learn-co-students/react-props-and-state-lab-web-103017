import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
import {getAll} from '../data/pets';
import Pet from './Pet'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: getAll(),
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    }
  }

  onAdoptPet = (id) => {
  //   const pet = this.state.pets.find(pet =>
  //     pet.id === id
  //   )
  //   console.log(pet.id);
  // // this.props.onAdoptPet.push(pet.id)
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  onChangeType = value => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    });
  };

  onFindPetsClick = () => {
    if (this.state.filters.type === "all") {
      fetch("/api/pets")
        .then(resp => resp.json())
        .then(json => this.setState({ pets: json }));
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(resp => resp.json())
        .then(json => this.setState({ pets: json }));
    }
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
            <Filters
              filters={this.state.filters}
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}
            />
            </div>
            <div className="twelve wide column">
              <PetBrowser
              pets = {this.state.pets}
              onAdoptPet = {this.onAdoptPet}
              adoptedPets = {this.state.adoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
