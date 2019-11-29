import React, {Component,Fragment} from 'react';

const Paddock = ({paddock},{dinosPlaced}) => {
  return (
  <Fragment>
    <div>
      <h3>{paddock.paddock}</h3>
      <h3>Type: {paddock.type}</h3>
      <h3>Capacity: {paddock.capacity}</h3>
      <p>Dinosaurs: {dinosPlaced}</p>
    </div>
  </Fragment>
)
}

export default Paddock;
