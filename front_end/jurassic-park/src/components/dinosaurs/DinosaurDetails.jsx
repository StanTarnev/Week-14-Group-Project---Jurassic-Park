import React from 'react';
import Dinosaur from './Dinosaur';

const DinosaurDetails = (props) => {

  const options = props.paddocks.map((paddock, index) => {
    return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
  })

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
    }
    props.handleUpdateDinosaur(props.dinosaur.id, dinosaur)

  }

  const handleTransferSubmit = (event) => {
    event.preventDefault();
    const dinosaur ={
      "paddock": event.target.paddock.value
    }
    props.handleUpdateDinosaur(props.dinosaur.id, dinosaur);
  }

  return(
    <div className="component">
      <h3>Dinosaur Details</h3>
      <Dinosaur dinosaur={props.dinosaur}/>
      <div className="buttons">
        <form onSubmit={handleSubmit}>
          <button type="submit">Feed Dinosaur</button>
        </form>
        <form onSubmit={handleTransferSubmit}>
          <select name="paddock">
            {options}
          </select>
          <button type="submit">Transfer Paddock</button>
        </form>
        <button onClick={handleDinosaurDelete}>Delete Dinosaur</button>
      </div>
    </div>
  )
}
export default DinosaurDetails
