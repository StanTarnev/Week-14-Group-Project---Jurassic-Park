import React, {Component, Fragment} from 'react';
import DinosaurList from '../../components/dinosaurs/DinosaurList';

class DinosaurContainer extends Component {
  constructor(props){
    super(props);
    this.handleDinosaurUpdate = this.handleDinosaurUpdate.bind(this)
  }
  handleDinosaurUpdate(dinosaur){
    const request = new Request();
    request.patch('/api/dinosaurs/' + this.props.dinosaur.id, dinosaur)
    .then(() => {
      window.location = '/'
    })
  }
  render(){
    return(
      <Fragment>
        <DinosaurList
          dinosaurs={this.props.dinosaurs}
          handleDinosaurUpdate={this.handleDinosaurUpdate}/>
      </Fragment>
    )
  }
}
export default DinosaurContainer;
