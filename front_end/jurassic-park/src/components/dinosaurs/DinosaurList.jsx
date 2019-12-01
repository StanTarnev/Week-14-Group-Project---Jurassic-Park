import React, {Fragment} from 'react';
import Dinosaur from './Dinosaur';

const DinosaurList = (props) => {

	const dinosaurs = props.dinosaurs.map((dinosaur, index) => {
		const url = "/dinosaurs/" +dinosaur.id;
		return(
			<div className="component">
				<li key={index}>
	        {/* <Dinosaur dinosaur={dinosaur}/>*/}
					<h3>Name: {dinosaur.name}</h3>
					<div className="buttons">
						<form>
	          	<button type="submit">Feed Dinosaur</button>
	          </form>
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
