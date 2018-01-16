import React from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';
import {getAll} from '../data/pets'

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

  componentDidMount() {
    fetch('/api/pets').then(resp => resp.json())
    .then((pets => this.setState({pets})))
  }

  onAdoptPet = (id) => {
    this.setState( prevState => {
      return {
        adoptedPets: [...this.state.adoptedPets, id]
      }
    })
  }

  onChangeType = (value) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    })
  }

  onFindPetsClick = (ev) => {
    let query = this.state.filters.type
    if (query === 'all') {
      fetch('/api/pets')
      .then(resp => resp.json())
      .then(json => this.setState({
        pets: json
      }))
    } else {
      fetch(`/api/pets?type=${query}`)
      .then(resp => resp.json())
      .then(json => this.setState({
        pets: json
      }))
    }
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
              <Filters 
              filters={this.state.filters} 
              onFindPetsClick={this.onFindPetsClick}
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets} 
              adoptedPets={this.state.adoptedPets} 
              onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;