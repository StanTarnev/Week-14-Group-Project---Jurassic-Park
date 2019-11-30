import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import NavBar from '../NavBar';
import DinosaurContainer from './dinosaurs/DinosaurContainer';
import PaddockContainer from './paddocks/PaddockContainer';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      dinosaurs: [],
      paddocks: []
  }
}
componentDidMount(){
  const request = new Request()

  const promise1 = request.get('/api/dinosaurs');
  const promise2 = request.get('/api/paddocks');
  const promises = [promise1, promise2]

  Promise.all(promises).then((data) => {
    this.setState({
      dinosaurs: data[0]._embedded.dinosaurs,
      paddocks: data[1]._embedded.paddocks
    })
  })
}
  render(){
    return(
      <Fragment>
        <Router>
          <NavBar/>
          <Switch>
          {/* HOME */}
            <Route exact path="/" render={(props) => {
              return (
                <Fragment>
                <div className="container">
                  <DinosaurContainer className="dino-container" dinosaurs={this.state.dinosaurs}/>
                  <PaddockContainer className="paddock-container" paddocks={this.state.paddocks}/>
                </div>
                </Fragment>
              )
            }}/>
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

export default MainContainer;
