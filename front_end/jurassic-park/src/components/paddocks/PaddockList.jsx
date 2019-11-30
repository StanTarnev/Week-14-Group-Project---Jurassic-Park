import React, {Fragment} from 'react';
import PaddockDetail from './PaddockDetail';
import Paddock from './Paddock';

const PaddockList = (props) => {

  const paddocks = props.paddocks.map((paddock, index) => {
		return(
			<li key={index}>
        <Paddock paddock={paddock}/>
      </li>
		)
	})

  return (
    <Fragment>
      <ul>
        {paddocks}
      </ul>
    </Fragment>
  )
}

export default PaddockList;
