import React, {Component} from 'react';
import DinosaurForm from '../../components/dinosaurs/DinosaurForm';

class DinosaurFormContainer extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return <DinosaurForm/>
  }
}

export default DinosaurFormContainer;
