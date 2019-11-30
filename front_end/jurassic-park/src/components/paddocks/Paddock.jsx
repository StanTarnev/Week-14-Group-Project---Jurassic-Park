import React, {Fragment} from 'react';

const Paddock = ({paddock},{dinosPlaced}) => {

  const url = "/paddocks/" +paddock.id;

  return (
  <Fragment>
    <div className="component">
      <h3>{paddock.name}</h3>
      <p>Capacity: {paddock.capacity}</p>
      <p>Dinosaurs: {dinosPlaced}</p>
      <a href={url}><button>Add/Remove Dinosaurs</button></a>
    </div>
  </Fragment>
  )
}

export default Paddock;
