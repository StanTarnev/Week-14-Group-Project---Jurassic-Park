import React, {Fragment} from 'react';

const Dinosaur = ({dinosaur}) => {
  if(!dinosaur){
    return "Loading..."
  }

  return(
    <Fragment>
      <div className="component">
        <h3>{dinosaur.species}</h3>
        <p>Hunger: {dinosaur.belly}</p>
        <p>Gender: {dinosaur.gender}</p>
        <p>Age: {dinosaur.age}</p>
        <div className="buttons">
          <button>Feed Dinosaur</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Dinosaur;
