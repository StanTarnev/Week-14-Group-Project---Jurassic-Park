import React, {Component, Fragment} from 'react';

const PaddockDetail = ({paddock}) => {

  function feedDinosaurs(){

  }

  return(
    <Fragment>
    <div>
      <h3>{paddock.paddock}</h3>
      <h3>Type: {paddock.type}</h3>
      <h3>Capacity: {paddock.capacity}</h3>
    </div>
    <a><button>Add a Dinosaur</button></a>
    <a><button>Remove a Dinosaur</button></a>
    <a><button onClick={feedDinosaurs}>Feed Dinosaurs</button></a>
    </Fragment>
  )

}

export default PaddockDetail;
