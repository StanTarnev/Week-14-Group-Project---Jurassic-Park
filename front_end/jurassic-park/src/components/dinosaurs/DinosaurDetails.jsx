import React from 'react';
import Dinosaur from './Dinosaur';

const DinosaurDetails = (props) => {

  const handleDinosaurDelete = () => {
    props.onDinosaurDelete(props.dinosaur.id)
  }

  return(
    <div className="component">
      <h3>Dinosaur Details</h3>
      <Dinosaur dinosaur={props.dinosaur}/>
      <div className="buttons">
        <button onClick={handleDinosaurDelete}>Delete Dinosaur</button>
      </div>
    </div>
  )
}
export default DinosaurDetails
