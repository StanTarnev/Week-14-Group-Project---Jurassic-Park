import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import NavBar from '../NavBar';
import DinosaurContainer from './dinosaurs/DinosaurContainer';
import DinosaurFormContainer from './dinosaurs/DinosaurFormContainer';
import PaddockDetails from '../components/paddocks/PaddockDetails';
import PaddockFormContainer from './paddocks/PaddockFormContainer';
import PaddockContainer from './paddocks/PaddockContainer';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      dinosaurs: [],
      paddocks: []
  }
  this.findPaddockById = this.findPaddockById.bind(this)
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

findPaddockById(id){
    const paddock = this.state.paddocks.find((paddock) => {
      return paddock.id === parseInt(id)
    })
    return paddock;
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
                <div className="dinosaur-container">
                  <DinosaurContainer dinosaurs={this.state.dinosaurs}/>
                </div>
                <div className="paddock-container">
                  <PaddockContainer paddocks={this.state.paddocks}/>
                </div>
                </Fragment>
              )
            }}/>
          {/* ADD A DINOSAUR */}
            <Route exact path="/dinosaurs/new" render={(props) =>{
              return <DinosaurFormContainer/>
            }}/>

          {/* ADD A PADDOCK */}
            <Route exact path="/paddocks/new" render={(props) =>{
              return <PaddockFormContainer/>
            }}/>

          {/* VIEW A PADDOCK BY ID */}
            <Route exact path="/paddocks/:id" render={(props) => {
              const id = props.match.params.id;
              const paddock = this.findPaddockById(id);
              return <PaddockDetails paddock={paddock}/>
            }}/>

          </Switch>
        </Router>
      </Fragment>
    )
  }
}

export default MainContainer;
