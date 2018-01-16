import React from 'react';
import Pet from './Pet';

const PetBrowser = (props) => {
  return (
    <div className="ui cards">
      {props.pets.map(pet => {
        return (<Pet 
                pet={pet} 
                onAdoptPet={props.onAdoptPet} 
                isAdopted={props.adoptedPets.includes(pet.id)}
                />)
      })}
    </div>
  )
}

export default PetBrowser;
