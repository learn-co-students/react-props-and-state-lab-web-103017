import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    return (
      <div className="ui cards">

        {this.props.pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id) ? true : false}/>)}
      </div>
    );
  }
}

export default PetBrowser;
