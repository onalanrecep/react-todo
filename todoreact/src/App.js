import React, { Component } from 'react';
import Navbar from './components/Navbar';
//import Gorev from './components/Gorev';
import Gorevler from './components/Gorevler';
import './App.css';


class App extends Component {
  

  

render() {

  return (
    <div className="App">
      
      <div className="todo"> 
        <Navbar/>
      <div className="sorumlular">
        <div className="sorumlu"> 
          <h3 className="baslik"> {'Recep'} </h3>
          <Gorevler />
        </div>
      </div>
    
    </div> 
    </div>
  );
}
}
export default App;
