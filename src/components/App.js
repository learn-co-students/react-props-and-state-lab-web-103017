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

  onChangeType = type => {
    // this.setState({ filters: { ...this.state.filters, type: type }})
    this.setState({filters: {type: type}})
  }


  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets').then(resp => resp.json()).then(pets => this.setState({ pets }));
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(pets => this.setState({ pets }))
    }
  }

  onAdoptPet = petId => {
    this.setState({ adoptedPets: [...this.state.adoptedPets, petId] })
  }

  render() {
      // console.log('my pets', this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} filters={this.state.filters} onFindPetsClick={this.onFindPetsClick}/>
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
