import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  getAvailable(id){

    if (this.props.adoptedPets.includes(id)) {
      return true
    } else {
      return false
    }

  }



  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(p => <Pet pet={p} onAdoptPet={this.props.onAdoptPet} isAdopted={this.getAvailable(p.id)} />)}
      </div>
    );
  }
}

export default PetBrowser;
