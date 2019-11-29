import React, {Component, Fragment} from 'react';
import NavBar from '../NavBar';
import DinosaurContainer from './dinosaurs/DinosaurContainer';
import PaddockContainer from './paddocks/PaddockContainer';


class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      dinosaurs: [
      {
        id: 1,
        species: "Dreadnoughtus",
        belly: 10,
        gender: "Female",
        age: 22,
        paddock: "Paddock 1"
      },
      {
        id: 2,
        species: "Dreadnoughtus",
        belly: 5,
        gender: "Male",
        age: 36,
        paddock: "Paddock 2"
      },
      {
        id: 3,
        species: "Pachycephalosaurus",
        belly: 3,
        gender: "Female",
        age: 50,
        paddock: "Paddock 2"
      }
    ],
      paddocks: [
      {
        id: 1,
        paddock: "Paddock 1",
        type: "Herbivore Paddock",
        capacity: 4,
        dinosaurs: []
      },
      {
        id: 2,
        paddock: "Paddock 2",
        type: "Herbivore Paddock",
        capacity: 4,
        dinosaurs: []
      },
      {
        id: 3,
        paddock: "Paddock 3",
        type: "Carnivore Paddock",
        capacity: 4,
        dinosaurs: []
      },
      {
        id: 4,
        paddock: "Paddock 1",
        type: "Carnivore Paddock",
        capacity: 4,
        dinosaurs: []
      }
    ]
  }
}
  render(){
    return(
      <Fragment>
        <NavBar/>
        <div className="container">
        <DinosaurContainer className="dino-container" dinosaurs={this.state.dinosaurs}/>
        <PaddockContainer className="paddock-container"paddocks={this.state.paddocks}/>
        </div>
      </Fragment>
    )
  }
}

export default MainContainer;
