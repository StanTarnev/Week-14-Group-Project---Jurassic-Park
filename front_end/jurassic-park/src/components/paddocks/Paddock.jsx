import React, {Fragment} from 'react';

const Paddock = ({paddock}) => {

  if(!paddock){
    return "Loading..."
  }

  return(
  <Fragment>
    <div className="component">
      <h3>{paddock.name}</h3>
      <p>Capacity: {paddock.capacity}</p>
      <p>Dinosaurs: {paddock.dinosaurs}</p>
    </div>
  </Fragment>
  )
}

export default Paddock;
