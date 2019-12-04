import React, {Fragment} from 'react';

const Paddock = ({paddock}) => {

  if(!paddock){
    return "Loading..."
  }

  const dinos = paddock.dinosaurs.map((dinosaur, index) => {
    return (<li key={index}>
      {dinosaur.name} ({dinosaur.species})
     </li>)
  })

  return(
  <Fragment>
    <div className="component" id="element">
      <h3>{paddock.name}</h3>
      <p>Type: {paddock.type}</p>
      <p>Capacity: {paddock.capacity}</p>
      <p>Dinosaurs:</p>
      <ul>
        {dinos}
      </ul>
    </div>
  </Fragment>
  )
}

export default Paddock;
