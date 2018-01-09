import React from 'react';

import Pet from './Pet';

// Should have a pets prop. This is an array of pets that the component uses to
// render <Pet /> components.
// Should have an onAdoptPet prop. This callback prop gets passed to its
// <Pet /> children components.
// Should have an adoptedPets prop. Use this prop to figure out if a pet is adopted
// or not, and pass that result to the <Pet /> components in the form of an
// isAdopted prop.


class PetBrowser extends React.Component {
  render() {

    const petCards = this.props.pets.map(petChars => {
      return (
        <Pet
          pet={petChars}
          onAdoptPet={this.props.onAdoptPet}
          isAdopted={ (this.props.adoptedPets.find(pet => pet === petChars.id)) ? true : false}
        />
      );
    });

    return (
      <div className="ui cards">
        {petCards}
      </div>
    );
  }
}

export default PetBrowser;
