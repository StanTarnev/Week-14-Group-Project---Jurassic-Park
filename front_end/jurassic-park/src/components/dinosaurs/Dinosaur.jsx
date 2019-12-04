import React, {Component, Fragment} from 'react';

class Dinosaur extends Component{
  constructor(props) {
    super(props);
    this.state = {
      belly: null
    }
    this.hungerTimer = null;
    this.increaseHunger = this.increaseHunger.bind(this);
  }

  componentDidUpdate() {
    // this method will run any time any data on the Dinosaur changes (potentially LOTS! of times)
    // we only want this method to run once: whenever we FULLY have the dinosaur prop, and whenever we have not yet initialized this.state.belly
    if (this.props.dinosaur && this.state.belly == null) {
      this.setState({
        belly: this.props.dinosaur.belly
      })
      this.hungerTimer = setInterval(() => this.increaseHunger(), 5000);
    }
  }

  increaseHunger(){
    this.setState({
      belly: this.state.belly += 1
    })
    if (this.state.belly >= 15) {
      this.props.dinosaurPassesAway();
      alert("You have lost a dinosaur due to malnutrition!")
    }
    // this.props.dinosaur.belly += 1;
    // this.hungerTimer = setInterval(() => 1000);
  }

  render() {
    if(!this.props.dinosaur){
      return "Loading..."
    }

    return(
      <Fragment>
      <div className="component" id="element">
      <h3>{this.props.dinosaur.name}</h3>
      <p>Species: {this.props.dinosaur.species}</p>
      <p>Type: {this.props.dinosaur.type}</p>
      <p>Hunger: {this.state.belly}</p>
      <p>Gender: {this.props.dinosaur.gender}</p>
      <p>Age: {this.props.dinosaur.age}</p>
      <img src={this.props.dinosaur.img} alt="dinosaur"/>
      <p>Paddock: {this.props.dinosaur.paddock.name}</p>
      </div>
      </Fragment>
    )
  }
}

export default Dinosaur;
