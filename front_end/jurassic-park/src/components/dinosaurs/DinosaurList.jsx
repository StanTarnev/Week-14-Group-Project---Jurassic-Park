import React, {Fragment} from 'react';
import Dinosaur from './Dinosaur';

const DinosaurList = (props) => {

	const dinosaurs = props.dinosaurs.map((dinosaur, index) => {
		const url = "/dinosaurs/" +dinosaur.id;
		return(
			<div className="component">
				<li key={index}>
					<img src="../../images/t-rex-favicon.32x32.png" height="100" width="100"/>
					<h3>{dinosaur.name}</h3>
					<div className="buttons">
	            <a href={url}><button>View Dinosaur Details</button></a>
	        </div>
	      </li>
			</div>
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
