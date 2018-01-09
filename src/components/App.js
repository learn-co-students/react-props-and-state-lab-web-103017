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

  onChangeType = (changeType) => {
    this.setState({
      filters: {
        //this.setState merges outer most keys, does not handle nested keys
        ...this.state.filters,
        type: changeType
      }
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === "all"){
      return fetch('/api/pets').then(resp => resp.json()).then(output => {
        this.setState({
          //this.setState merges outer most keys, does not handle nested keys
          pets: [...output]
        })
      })
    }else {
      return fetch(`/api/pets?type=${this.state.filters.type}`).then(resp => resp.json()).then(output => {
        this.setState({
          pets: [...output]
        })
      })
    }
  }

  onAdoptPet = (id) => {
    this.setState({
      //this.setState merges outer most keys, does not handle nested keys      
      adoptedPets: [id]
    })
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
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
