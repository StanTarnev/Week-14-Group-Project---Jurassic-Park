import React, {Component, Fragment} from 'react';
import DinosaurList from '../../components/dinosaurs/DinosaurList';
// import DinosaurFormContainer from './DinosaurFormContainer';

class DinosaurContainer extends Component {
  render(){
    return(
      <Fragment>

        <DinosaurList dinosaurs={this.props.dinosaurs}/>
        <button>Add Dinosaur</button>

      </Fragment>
    )
  }
}
export default DinosaurContainer;
