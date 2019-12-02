import React, {Component} from 'react';
import DinosaurForm from '../../components/dinosaurs/DinosaurForm';
import Request from '../../helpers/request';

class DinosaurFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleDinosaurPost = this.handleDinosaurPost.bind(this);
  }

  handleDinosaurPost(dinosaur){
    const request = new Request();
    request.post('/api/dinosaurs', dinosaur).then(() => {
      window.location = '/'
    })
  }
  render(){
    return <DinosaurForm
      handleDinosaurPost={this.handleDinosaurPost}
      paddocks={this.props.paddocks}/>
  }
}

export default DinosaurFormContainer;
