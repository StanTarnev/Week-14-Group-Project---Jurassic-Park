import React from 'react';
import Dinosaur from './Dinosaur';

const DinosaurDetails = (props) => {

  const handleDelete = () => {
    props.onDelete(props.dinosaur.id)
  }

  return(
    <div className="component">
      <Dinosaur/>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
export default DinosaurDetails
