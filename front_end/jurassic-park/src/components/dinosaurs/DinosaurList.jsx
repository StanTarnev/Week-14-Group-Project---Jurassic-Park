import React, {Fragment} from 'react';
import Dinosaur from './Dinosaur';

const DinosaurList = (props) => {

	const handleSubmit = (event) => {
    event.preventDefault();

		const dinosaur = {
      "belly":event.target.belly.value
    }
		props.handleDinosaurUpdate(dinosaur)
	}

	const dinosaurs = props.dinosaurs.map((dinosaur, index) => {
		return(
			<li key={index}>
        <Dinosaur dinosaur={dinosaur}/>
				<div className="buttons">
					<form onSubmit={handleSubmit}>
          	<button type="submit" name="belly" value="1">Feed Dinosaur</button>
					</form>
        </div>
      </li>
		)
	})
	return (
    <Fragment>
  		<ul>
  		    {dinosaurs}
  		</ul>
    </Fragment>
	)
}

 export default DinosaurList;
