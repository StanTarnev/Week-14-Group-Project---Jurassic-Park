import React, {Fragment} from 'react';

const Paddock = ({paddock},{dinosPlaced}) => {
  if(!paddock){
    return "Loading..."
  }
  return (
  <Fragment>
    <div className="component">
      <h3>{paddock.paddock}</h3>
      <h3>Type: {paddock.type}</h3>
      <h3>Capacity: {paddock.capacity}</h3>
      <p>Dinosaurs: {dinosPlaced}</p>
      <div>
        <button>Add a Dinosaur</button>
        <button>Remove a Dinosaur</button>
        <button>Feed Dinosaurs</button>
      </div>
    </div>
  </Fragment>
  )
}

export default Paddock;
