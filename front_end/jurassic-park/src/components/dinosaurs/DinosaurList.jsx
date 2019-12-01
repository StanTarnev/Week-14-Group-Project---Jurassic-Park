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
  		<ul>
  		    {dinosaurs}
  		</ul>
    </Fragment>
	)
}

 export default DinosaurList;
