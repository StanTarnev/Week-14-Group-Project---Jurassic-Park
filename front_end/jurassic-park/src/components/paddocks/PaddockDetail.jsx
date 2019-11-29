import React, {Fragment} from 'react';
import Paddock from './Paddock';

const PaddockDetail = ({paddock}, {dinosPlaced}) => {
  return(
    <Fragment>
      <Paddock dinosaurs={dinosPlaced} paddock={paddock}/>
    </Fragment>
  )
}

export default PaddockDetail;
