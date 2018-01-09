import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const petBrowser = this.props.pets.map(pet => {
      console.log(this.props.adoptedPets.includes(pet.id))
      //gg n          console.log(pet)
      return (
        <Pet
          pet={pet}
          key={pet.id}
          onAdoptPet={this.props.onAdoptPet}
          isAdopted={this.props.adoptedPets.includes(pet.id)}
        />
      );
    });
    return (
      <div className="ui cards">
        <code>&lt;Pet /&gt;</code>{petBrowser}
      </div>
    );
  }
}

export default PetBrowser;
