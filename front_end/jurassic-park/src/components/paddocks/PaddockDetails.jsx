import React from 'react';
import Paddock from './Paddock';

const PaddockDetails = (props) => {

  const handlePaddockDelete = () => {
    props.onPaddockDelete(props.paddock.id)
  }

  const dinoOptions = props.dinosaurs.map((dinosaur, index) => {
    return <option key={index} value={dinosaur._links.self.href}>{dinosaur.name}</option>
  })

  return(
    <div className="component">
      <h3>Paddock Details</h3>
      <Paddock paddock={props.paddock}/>
      <div className="buttons">
      <form>
        <select name="dinosaur">
          {dinoOptions}
        </select>
        <button type="submit">Add Dinosaur To Paddock</button>
      </form>
        <button onClick={handlePaddockDelete}>Delete Paddock</button>
      </div>
    </div>
  )
}
export default PaddockDetails
