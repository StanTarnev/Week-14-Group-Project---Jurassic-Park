import React, {Fragment} from 'react';
import PaddockDetail from './PaddockDetail';

const PaddockList = (props) => {

  const paddocksView = props.paddocks.map((paddock, index) => {
    return (
      <PaddockDetail paddock={paddock}/>
    )
  })

  return (
    <Fragment>
      {paddocksView}
    </Fragment>
  )
}

export default PaddockList;
