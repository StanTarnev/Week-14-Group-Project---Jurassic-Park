import React, {Fragment} from 'react';

const Paddock = ({paddock},{dinosPlaced}) => {
  if(!paddock){
    return "Loading..."
  }

  const url = "/paddocks/" +paddock.id;

  return (
  <Fragment>
    <div className="component">
      <h3>{paddock.name}</h3>
      <p>Capacity: {paddock.capacity}</p>
      <p>Dinosaurs: {dinosPlaced}</p>
      <div className="buttons">
        <a href={url}><button>Add/Remove Dinosaurs</button></a>
      </div>
      <div className="buttons">
      <select name="dinosaurs">
        <option>Available Dinosaurs</option>
      </select>
        <button>Add to Paddock</button>
      <select>
        <option>Paddock Dinosaurs</option>
      </select>
        <button>Remove from Paddock</button>
      </div>
    </div>
  </Fragment>
  )
}

export default Paddock;
