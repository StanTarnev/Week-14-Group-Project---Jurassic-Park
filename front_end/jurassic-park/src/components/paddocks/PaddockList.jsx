import React, {Component} from 'react';
import PaddockDetail from './PaddockDetail';

const PaddockList =(props)=> {

  const paddocks = props.paddocks.map((paddock) => {
    return (<PaddockDetail paddock={paddock}/>
    )
  })


  return (
    <div className="paddock-list">
    {paddocks}
    <hr/>
    <a><button>Add a Paddock</button></a>
    </div>
  )
  // <a onClick={this.addPaddock}><button>Add a Paddock</button></a>
}

export default PaddockList;
