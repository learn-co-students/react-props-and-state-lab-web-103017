import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  whetherAdopted = petId => {
    return this.props.adoptedPets.includes(petId);
  };

  render() {
    const renderPets = this.props.pets.map(pet => (
      <Pet
        pet={pet}
        key={pet.id}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.whetherAdopted(pet.id)}
      />
    ));

    return <div className="ui cards">{renderPets}</div>;
  }
}

export default PetBrowser;
