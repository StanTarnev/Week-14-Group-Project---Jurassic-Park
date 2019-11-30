import React, {Component, Fragment} from 'react';
import DinosaurList from '../../components/dinosaurs/DinosaurList';
// import DinosaurFormContainer from './DinosaurFormContainer';

class DinosaurContainer extends Component {
  render(){
    return(
      <Fragment>
      <div className="container">
        <DinosaurList dinosaurs={this.props.dinosaurs}/>
      </div>
        <button>Add Dinosaur</button>

      </Fragment>
    )
  }
}
export default DinosaurContainer;
