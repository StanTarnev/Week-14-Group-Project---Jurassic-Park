import React, {Fragment} from 'react';

const Dinosaur = ({dinosaur}) => {

  const url = "/dinosaurs/" +dinosaur.id;

  return(
    <Fragment>
      <div className="component">
        <h3>{dinosaur.species}</h3>
        <p>Hunger: {dinosaur.belly}</p>
        <p>Gender: {dinosaur.gender}</p>
        <p>Age: {dinosaur.age}</p>
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
