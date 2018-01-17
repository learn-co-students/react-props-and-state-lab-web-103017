import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    // console.log("PetBrowser", this.props)
    return (
      <div className="ui cards">
        {this.props.pets.map((pet, i) => (
          <Pet key={i} pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)}/>
        ))}
      </div>
    );
  }
}

export default PetBrowser;
