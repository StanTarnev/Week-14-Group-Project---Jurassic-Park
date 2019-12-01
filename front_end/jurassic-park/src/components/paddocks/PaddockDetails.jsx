import React from 'react';
import Paddock from './Paddock';

const PaddockDetails = (props) => {

  const handlePaddockDelete = () => {
    props.onPaddockDelete(props.paddock.id)
  }

  return(
    <div className="component">
      <h3>Paddock Details</h3>
      <Paddock paddock={props.paddock}/>
      <div className="buttons">
      <select name="dinosaurs">
        <option>Available Dinosaurs</option>
      </select>
        <button>Add to Paddock</button>
      <select name="paddocks">
        <option>Paddock Dinosaurs</option>
      </select>
        <button>Remove from Paddock</button>
        <button onClick={handlePaddockDelete}>Delete Paddock</button>
      </div>
    </div>
  )
}
export default PaddockDetails
