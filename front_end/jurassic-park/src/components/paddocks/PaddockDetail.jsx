import React, {Component, Fragment} from 'react';
import Paddock from './Paddock';

const PaddockDetail = ({paddock}, {dinosPlaced}) => {
  return(
    <Fragment>
    <Paddock dinosaurs={dinosPlaced} paddock={paddock}/>
    <button>Add a Dinosaur</button>
    <button>Remove a Dinosaur</button>
    <button>Feed Dinosaurs</button>
    </Fragment>
  )
}

export default PaddockDetail;
