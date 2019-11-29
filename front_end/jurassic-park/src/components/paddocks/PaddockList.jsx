import React, {Component} from 'react';
import PaddockDetail from './PaddockDetail';

const PaddockList = (props) => {

  const paddocksView = props.paddocks.map((paddock, index) => {
    return (
      <PaddockDetail paddock={paddock}/>
    )
  })

  return (
    <div className="paddock-list">
    {paddocksView}
    </div>
  )
}

export default PaddockList;
