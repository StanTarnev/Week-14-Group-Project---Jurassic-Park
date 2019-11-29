import React, {Component} from 'react';
import PaddockList from '../components/PaddockList.js';


class PaddockContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          paddock: "Paddock 1",
          type: "Herbivore Paddock",
          capacity: 4,
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
          ]

        }
      ]
    }
  }

  render() {
    return (
      <div className="paddock-container">
      <PaddockList data={this.state.data}/>
      </div>
    )
  }
}

export default PaddockContainer;
