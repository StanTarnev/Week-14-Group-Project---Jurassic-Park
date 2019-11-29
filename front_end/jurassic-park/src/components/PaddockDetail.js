import React, {Component} from 'react';

const PaddockDetail = ({paddock}) => {

  function feedDinosaurs(){

  }

  return(
    <div>
    <h3>{paddock.paddock}</h3>
    <h3>Type: {paddock.type}</h3>
    <h3>Capacity: {paddock.capacity}</h3>
    <hr/>
    <a><button>Add a Dinosaur</button></a>
    <a><button>Remove a Dinosaur</button></a>
    <a><button onClick={feedDinosaurs}>Feed Dinosaurs</button></a>
    </div>
  )

}

export default PaddockDetail;
