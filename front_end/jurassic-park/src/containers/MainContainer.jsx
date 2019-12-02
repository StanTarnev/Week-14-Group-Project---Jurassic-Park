import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import NavBar from '../NavBar';
import DinosaurDetails from '../components/dinosaurs/DinosaurDetails';
import DinosaurContainer from './dinosaurs/DinosaurContainer';
import DinosaurFormContainer from './dinosaurs/DinosaurFormContainer';
import PaddockDetails from '../components/paddocks/PaddockDetails';
import PaddockFormContainer from './paddocks/PaddockFormContainer';
import PaddockContainer from './paddocks/PaddockContainer';
import DashboardContainer from './park/DashboardContainer';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      dinosaurs: [],
      paddocks: [],
      visitors: 0,
      revenue: 0,
      totalRevenue: 0,
      parkOpen: true
  }
  this.findPaddockById = this.findPaddockById.bind(this);
  this.findDinosaurById = this.findDinosaurById.bind(this);
  this.handleDinosaurDelete = this.handleDinosaurDelete.bind(this);
  this.handlePaddockDelete = this.handlePaddockDelete.bind(this);
  this.addVisitors = this.addVisitors.bind(this);
  this.closePark = this.closePark.bind(this);
  this.visitorTimer = null;

}

componentDidMount(){

  const request = new Request();

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

addVisitors() {
  this.setState({
    visitors: this.setState.visitors +=1,
    revenue: this.state.revenue +=5
  });
}

closePark() {
  clearTimeout(this.visitorTimer);
  this.setState({
    visitors: 0,
    totalRevenue: this.state.totalRevenue += this.state.revenue,
    revenue: 0,
    parkOpen: false
  });
}

openPark = () => {
  this.setState({
    parkOpen: true
  });

  this.visitorTimer = setInterval(() => this.addVisitors(), 1000);
}

toggleOpenClose = () => {
   if(this.state.parkOpen) {
      this.closePark();

   } else {
      this.openPark();
   }
};


findDinosaurById(id){
      const dinosaur = this.state.dinosaurs.find((dinosaur) => {
        return dinosaur.id === parseInt(id)
      })
      return dinosaur;
    }

findPaddockById(id){
    const paddock = this.state.paddocks.find((paddock) => {
      return paddock.id === parseInt(id)
    })
    return paddock;
  }

handleDinosaurDelete(id){
  const request = new Request()
  const url = '/api/dinosaurs/'+id;
  request.delete(url).then(()=>{
    window.location ='/';
    });
  }

handlePaddockDelete(id){
  const request = new Request()
  const url = '/api/paddocks/'+id;
  request.delete(url).then(()=>{
    window.location ='/';
    });
  }

handleFeedDinosaur(id, dinosaur){
  const request = new Request();
  request.patch('/api/dinosaurs/'+id, dinosaur)
  .then(() => {
    window.location = '/dinosaurs/'+id;
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
                  <div className="main-container">
                    <div className="dinosaur-container">
                      <DinosaurContainer
                      dinosaurs={this.state.dinosaurs}/>
                    </div>
                    <div className="paddock-container">
                      <PaddockContainer
                      paddocks={this.state.paddocks}/>
                    </div>
                    <div className="component">
                      <div className="buttons">
                        <button onClick={this.toggleOpenClose}>
                        {(this.state.parkOpen) ? "Close Park" : "Open Park"}
                        </button>

                      </div>
                      <p>Total Revenue: £ {this.state.totalRevenue}</p>
                      <p>Visitor Count: {this.state.visitors}</p>
                      <p>Daily Revenue: £{this.state.revenue}</p>
                    </div>
                  </div>
                </Fragment>
              )
            }}/>
          {/* ADD A DINOSAUR */}
            <Route exact path="/dinosaurs/new" render={(props) =>{
              return <DinosaurFormContainer
                paddocks={this.state.paddocks}/>
            }}/>

          {/* VIEW A DINOSAUR BY ID */}
            <Route exact path="/dinosaurs/:id" render={(props) => {
              const id = props.match.params.id;
              const dinosaur = this.findDinosaurById(id);
              return <DinosaurDetails
                dinosaur={dinosaur}
                handleFeedDinosaur={this.handleFeedDinosaur}
                onDinosaurDelete={this.handleDinosaurDelete}/>
            }}/>

          {/* ADD A PADDOCK */}
            <Route exact path="/paddocks/new" render={(props) =>{
              return <PaddockFormContainer/>
            }}/>

          {/* VIEW A PADDOCK BY ID */}
            <Route exact path="/paddocks/:id" render={(props) => {
              const id = props.match.params.id;
              const paddock = this.findPaddockById(id);
              return <PaddockDetails
                dinosaurs={this.state.dinosaurs}
                paddock={paddock}
                onPaddockDelete={this.handlePaddockDelete}/>
            }}/>

          {/* VIEW DASHBOARD */}
            <Route exact path="/dashboard" render={(props) => {
              return <DashboardContainer/>
            }}/>

          </Switch>
        </Router>
      </Fragment>
    )
  }
}

export default MainContainer;
