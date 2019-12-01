import React, {Component, Fragment} from 'react';
import DinosaurList from '../../components/dinosaurs/DinosaurList';

class DinosaurContainer extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Fragment>
        <DinosaurList
          dinosaurs={this.props.dinosaurs}/>
      </Fragment>
    )
  }
}
export default DinosaurContainer;
