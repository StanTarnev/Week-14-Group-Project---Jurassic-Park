import React, {Fragment} from 'react';

const Paddock = ({paddock}) => {

  if(!paddock){
    return "Loading..."
  }

  return(
  <Fragment>
    <div className="component">
      <h3>{paddock.name}</h3>
      <p>Type: {paddock.type}</p>
      <p>Capacity: {paddock.capacity}</p>
      <p>Dinosaurs:</p>
    </div>
  </Fragment>
  )
}

export default Paddock;
