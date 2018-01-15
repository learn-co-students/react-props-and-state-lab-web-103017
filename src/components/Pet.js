
import React from 'react';


const Pet = (props) => {
  const { pet, onAdoptPet, isAdopted } = props
  return (
    <div className="card">
      <div className="content">
        <a className="header">{pet.name}{pet.gender === 'male' ? '♂' : '♀'}</a>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age} </p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
      {!isAdopted ?  <button className="ui primary button" onClick={() => onAdoptPet(pet.id)}>Adopt pet</button> : <button className="ui disabled button">Already adopted</button>}
      </div>
    </div>
  )
}
export default Pet;
