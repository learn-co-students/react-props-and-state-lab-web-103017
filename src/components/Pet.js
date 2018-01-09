import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAdopt = event => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    let genderSymbol;
    this.props.pet.gender === 'male' ? genderSymbol = '♂' : genderSymbol = '♀';
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} (gender: {genderSymbol})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.handleAdopt}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet;
