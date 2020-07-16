import React, { Component } from 'react';
import Navbar from './components/Navbar';
//import Gorev from './components/Gorev';
import AddGorev from './components/AddGorev';
import Gorevler from './components/Gorevler';
import SayfaBulunamadı from './components/SayfaBulunamadı';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

class App extends Component {
  

  

render() {

  return (
    <Router>
      <div className="App">
        <div className="todo"> 
          <Navbar/>
          <div className="sorumlular">
            <div className="sorumlu"> 
              <h3 className="baslik"> {'Recep'} </h3>
              <Switch>
                <Route exact path = "/" component = {Gorevler}/>
                <Route exact path = "/add" component = {AddGorev}/>
                <Route component = {SayfaBulunamadı} />
              </Switch>
            </div>
          </div>
        </div> 
      </div>
    </Router>
  );
}
}
export default App;
