import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {


  render() {
    console.log(this.props.pets, this.props)
    const allPets = this.props.pets.map(pet =>
        <Pet pet={pet}
        key = {pet.id}
        id = {pet.id}
        name = {pet.name}
        age = {pet.age}
        weight = {pet.weight}
        type = {pet.type}
        gender = {pet.gender}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted = {this.props.adoptedPets.includes(pet.id) ? true : false}
        />
    )
    return (
      <div className="ui cards">
        {allPets}
      </div>
    );
  }
}

export default PetBrowser;



/*import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const renderPets = this.props.pets.map(pet =>
      <Pet
        pet={pet}
        key={pet.id}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(pet.id)}
      />
    )

    return (
      <div className="ui cards">
        {renderPets}
      </div>
    );
  }
}

export default PetBrowser;*/
