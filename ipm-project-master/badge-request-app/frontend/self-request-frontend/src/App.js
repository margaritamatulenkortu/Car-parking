import React from 'react';
import './App.css';
//import SelectForm from './components/SelectForm';
import Visitor from './components/Visitor';
import Associate from './components/Associate';
import Reports from './components/Reports';
import Active from './components/Active';
import Landing from './components/Landing';
import VisitorDetails from './components/VisitorDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {


  render() {

    return (
      <Router>
        <div>
          <Switch>
          <Route path='/' exact component={Landing}/>
          <Route path='/visitors' exact component={Visitor}/>
          <Route path='/associates' component={Associate}/>
          <Route path='/reports' component={Reports}/>
          <Route path='/active'  exact component={Active}/>
          <Route path='/active/:id' component={VisitorDetails}/>
          </Switch>
        </div>
      </Router>
    );
  }s
}

export default App;
