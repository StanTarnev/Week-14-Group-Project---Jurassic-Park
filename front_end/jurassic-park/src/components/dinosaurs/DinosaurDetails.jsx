import React from 'react';
import Dinosaur from './Dinosaur';

const DinosaurDetails = (props) => {

  const handleDinosaurDelete = () => {
    props.onDinosaurDelete(props.dinosaur.id)
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const dinosaur = {
    }

    if ( props.dinosaur.belly > 0){
      dinosaur.belly = props.dinosaur.belly -= 1
    } else {
      dinosaur.belly = 0
    }    if (dinosaur.belly > 0) {
      props.handleFeedDinosaur(props.dinosaur.id, dinosaur)
    }
  }

  return(
    <div className="component">
      <h3>Dinosaur Details</h3>
      <Dinosaur dinosaur={props.dinosaur}/>
      <div className="buttons">
        <form onSubmit={handleSubmit}>
          <button type="submit">Feed Dinosaur</button>
        </form>
        <button onClick={handleDinosaurDelete}>Delete Dinosaur</button>
      </div>
    </div>
  )
}
export default DinosaurDetails
