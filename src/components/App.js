
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

  onFindPetsClick = () => {
    let baseUrl = '/api/pets'
    if (this.state.filters.type !== 'all') {
      baseUrl = baseUrl + `?type=${this.state.filters.type}`
    }
    fetch(baseUrl)
      .then(resp => resp.json())
        .then(fetchedPets => {
          this.setState({
            pets: fetchedPets
          })
      })
  }

  onChangeType = (animal) => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: animal
      })
    }, () => console.log(this.state.filters))
  }

  onAdoptPet = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    }, () => console.log('in onAdoptPet method!', this.state.adoptedPets))

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
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
                adoptedPets={this.state.adoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
