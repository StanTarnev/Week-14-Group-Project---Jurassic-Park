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
      park: null ,
      visitorsCount: 0,
      visitors1:[],
      revenue: 0,
      totalRevenue: 0,
      parkOpen: false,
      date: null
  }
  this.findPaddockById = this.findPaddockById.bind(this);
  this.findDinosaurById = this.findDinosaurById.bind(this);
  this.handleDinosaurDelete = this.handleDinosaurDelete.bind(this);
  this.handlePaddockDelete = this.handlePaddockDelete.bind(this);
  this.addVisitors = this.addVisitors.bind(this);
  this.closePark = this.closePark.bind(this);
  this.getPaddockType = this.getPaddockType.bind(this);
  this.visitorTimer = null;
}

componentDidMount(){

  const request = new Request();

  const promise1 = request.get('/api/dinosaurs');
  const promise2 = request.get('/api/paddocks');
  const promise3 = request.get('/api/visitors');
  const promise4 = request.get('/park')
  const promises = [promise1, promise2,promise3,promise4]


  Promise.all(promises).then((data) => {
    this.setState({
      dinosaurs: data[0]._embedded.dinosaurs,
      paddocks: data[1]._embedded.paddocks,
      visitors1: data[2]._embedded.visitors,
      park: data[3]
    })
  })

  const today = new Date();
  const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  this.setState({
    date: date
  })
}

getPaddockType(url){
  const request = new Request();
  const data = request.get(url);
  return data.type;
}


addVisitors() {

  const request = new Request();
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
  const visitor ={
    "date": today
  };
  request.post('api/visitors', visitor).then(() => {

  })

  const park = request.get('/park')
  const promises = [park]
  Promise.all(promises).then((data) => {
    this.setState({
      visitorsCount: data[0].visitorCount,
      revenue: data[0].dailyRevenue
    });
  })

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

handleUpdateDinosaur(id, dinosaur){
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
                  <div className="main-container">
                    <div className="dinosaur-container">
                      <DinosaurContainer
                      dinosaurs={this.state.dinosaurs}/>
                    </div>
                    <div className="paddock-container">
                      <PaddockContainer
                      paddocks={this.state.paddocks}/>
                    </div>
                    </div>
                    <div id="stats" className="component">
                    <h3>Today's Date:</h3>
                    <h3>{this.state.date}</h3>
                    <p>Total Revenue: £ {this.state.totalRevenue}</p>
                      <div className="buttons">
                        <button onClick={this.toggleOpenClose}>
                        {(this.state.parkOpen) ? "Close Park" : "Open Park"}
                        </button>
                      </div>
                      <p>Visitor Count: {this.state.visitorCount}</p>
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
                paddocks={this.state.paddocks}
                findPaddockById={this.findPaddockById}
                handleUpdateDinosaur={this.handleUpdateDinosaur}
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
