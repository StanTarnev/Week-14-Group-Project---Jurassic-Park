import React, {Fragment} from 'react';

const Dinosaur = (props) => {
  if(!props.dinosaur){
    return "Loading..."
  }

  const url = "/dinosaurs/" +props.dinosaur.id;

  return(
    <Fragment>
      <div className="component">
        <h3>{props.dinosaur.species}</h3>
        <p>Hunger: {props.dinosaur.belly}</p>
        <p>Gender: {props.dinosaur.gender}</p>
        <p>Age: {props.dinosaur.age}</p>
        <div className="buttons">
					<form>
          	<button type="submit">Feed Dinosaur</button>
            <a href={url}><button>View Dinosaur Details</button></a>
					</form>
        </div>
      </div>
    </Fragment>
  )
}

export default Dinosaur;
