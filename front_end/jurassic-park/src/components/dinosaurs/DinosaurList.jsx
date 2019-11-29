import React, {Fragment} from 'react';
import Dinosaur from './Dinosaur';

const DinosaurList = (props) => {

	const dinosaurs = props.dinosaurs.map((dinosaur, index) => {
		return(
			<li key={index}>
        <Dinosaur dinosaur={dinosaur}/>
      </li>
		)
	})
	return (
    <Fragment>
      <div>
  		<ul>
  		    {dinosaurs}
  		</ul>
      <button>Add Dinosaur</button>
      </div>
    </Fragment>
	)
}

 export default DinosaurList;
