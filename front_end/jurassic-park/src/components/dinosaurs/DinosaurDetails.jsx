import React, {Component} from 'react';
import Dinosaur from './Dinosaur';

class DinosaurDetails extends Component {
  constructor(props) {
    super(props);

    this.handleDinosaurDelete = this.handleDinosaurDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }





  handleDinosaurDelete () {
    this.props.onDinosaurDelete(this.props.dinosaur.id)
  }

  handleSubmit(event) {
    event.preventDefault();



    const dinosaur = {
    }

    if ( this.props.belly > 0){
      dinosaur.belly = this.props.dinosaur.belly -= 1
    } else {
      dinosaur.belly = 0
    }

    if (dinosaur.belly > 0) {
      this.props.handleFeedDinosaur(this.props.dinosaur.id, dinosaur)
    }

  }


  render(){
    return(
      <div className="component">
        <h3>Dinosaur Details</h3>
        <Dinosaur dinosaur={this.props.dinosaur}/>
        <div className="buttons">
          <form onSubmit={this.handleSubmit}>
            <button type="submit">Feed Dinosaur</button>
          </form>
          <button onClick={this.handleDinosaurDelete}>Delete Dinosaur</button>
        </div>
      </div>
    )
  }
}
export default DinosaurDetails
