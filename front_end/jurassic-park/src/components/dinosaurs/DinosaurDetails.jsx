import React from 'react';

const DinosaurDetails = (props) => {

  const handleDinosaurDelete = () => {
    props.onDinosaurDelete(props.dinosaur.id)
  }

  return(
    <div className="component">
      <h1>Dinosaur Details</h1>
      <div className="buttons">
        <button onClick={handleDinosaurDelete}>Delete Dinosaur</button>
      </div>
    </div>
  )
}
export default DinosaurDetails
