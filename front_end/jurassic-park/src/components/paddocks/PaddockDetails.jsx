import React from 'react';

const PaddockDetails = (props) => {

  return(
    <div className="component">
      <h1>Paddock Details</h1>
      <div className="buttons">
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
    </div>
  )
}
export default PaddockDetails
