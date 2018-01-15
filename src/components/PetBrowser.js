import React from 'react';

import Pet from './Pet';

const PetBrowser = (props) => {
  const { pets, onAdoptPet, adoptedPets } = props
  const petCards = pets.map((pet, i) => {
    return (
      <Pet
        key={i}
        pet={pet}
        onAdoptPet={onAdoptPet}
        isAdopted={adoptedPets.includes(pet.id) ? true : false}
      />
    )
  });

  return (
    <div className="ui cards">
      {petCards}
    </div>
  );
}

export default PetBrowser;
