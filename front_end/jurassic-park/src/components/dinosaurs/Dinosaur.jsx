import React, {Fragment} from 'react';

const Dinosaur = ({dinosaur}) => {

  if(!dinosaur){
    return "Loading..."
  }

  return(
    <Fragment>
      <div className="component">
        <h3>{dinosaur.name}</h3>
        <img src={dinosaur.img}/>
        <p>Species: {dinosaur.species}</p>
        <p>Type: {dinosaur.type}</p>
        <p>Hunger: {dinosaur.belly}</p>
        <p>Gender: {dinosaur.gender}</p>
        <p>Age: {dinosaur.age}</p>
        <p>Paddock: {dinosaur.paddock.name}</p>
      </div>
    </Fragment>
  )
}

export default Dinosaur;
