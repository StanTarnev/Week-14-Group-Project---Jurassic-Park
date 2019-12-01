import React, {Fragment} from 'react';

const Paddock = ({paddock},{dinosPlaced}) => {

  const url = "/paddocks/" +paddock.id;

  return(
  <Fragment>
    <div className="component">
      <h3>{paddock.name}</h3>
      <p>Capacity: {paddock.capacity}</p>
      <p>Dinosaurs: {dinosPlaced}</p>
      <div className="buttons">
      <a href={url}><button>View Paddock Details</button></a>
      </div>
    </div>
  </Fragment>
  )
}

export default Paddock;
