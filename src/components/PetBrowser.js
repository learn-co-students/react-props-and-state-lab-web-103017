import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor() {
    super();
  }
  render() {
    const petCards = this.props.pets.map((pet, i) => {
      return (
        <Pet
          key={i}
          pet={pet}
          onAdoptPet={this.props.onAdoptPet}
          isAdopted={this.props.adoptedPets.includes(pet.id) ? true : false}
        />
      )
    })
    console.log("in pet browser", this.props.pets, petCards)
    return (
      <div className="ui cards">
        {petCards}
      </div>
    );
  }
}

export default PetBrowser;


// import React from 'react';
//
// import Pet from './Pet';
//
// class PetBrowser extends React.Component {
//   constructor() {
//     super()
//
//
//
//   }
//
//
//   render() {
//     console.log(this.props.adoptedPets)
//     const petCards=(this.props.pets.map(pet => {
//       return (
//         <Pet
//           key={pet.id}
//           id={pet.id}
//           name={pet.name}
//           age={pet.age}
//           weight={pet.weight}
//           type={pet.type}
//           gender={pet.gender}
//           onAdoptPet={this.props.onAdoptPet}
//           isAdopted={this.props.adoptedPets.includes(pet.id) ? true : false}
//         />
//       )
//     }))
//
//     return (
//       <div className="ui cards">
//         <code>&lt;Pet /&gt;</code> &nbsp; components should go here
//
//         {petCards}
//       </div>
//     );
//   }
// }
//
// export default PetBrowser;
