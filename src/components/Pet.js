
import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  adoptHandle = () => this.props.onAdoptPet(this.props.pet.id)

  render() {
    const { pet } = this.props
    console.log(this.props.isAdopted)
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

        {!this.props.isAdopted ?  <button className="ui primary button" onClick={this.adoptHandle}>Adopt pet</button>
          : <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

export default Pet;

// import React from 'react';
//
// class Pet extends React.Component {
//   constructor() {
//     super();
//     this.adoptHandle = this.adoptHandle.bind(this)
//   }
//
//   adoptHandle = event => {
//     this.props.onAdoptPet(this.props.id)
//   }
//
//   render() {
//     // const { pet } = this.props
//     return (
//       <div className="card">
//         <div className="content">
//           <a className="header">{this.props.name} {this.props.gender === 'male' ?  '♂' : '♀'}</a>
//           <div className="meta">
//             <span className="date">{this.props.type}</span>
//           </div>
//           <div className="description">
//             <p>Age:{this.props.age} </p>
//             <p>Weight:{this.props.weight} </p>
//           </div>
//         </div>
//         <div className="extra content">
//           {!this.props.isAdopted ? <button className="ui primary button" onClick={this.adoptHandle}>Adopt pet</button> : <button className="ui disabled button">Already adopted</button>}
//         </div>
//       </div>
//     );
//   }
// }
//
// //<button disable> </button>
// // <button className="ui primary button" onClick={() => onAdoptPet(this.props.id)}>Adopt pet</button>
//
// export default Pet;
