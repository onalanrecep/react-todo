import React from 'react';
import Navbar from './components/Navbar'
import Gorev from './components/Gorev'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="todo"> 
        <Navbar/>
      <div className="gunler">
        <div className="gun"> 
          <h3 className="baslik">Pazartesi</h3>
          <Gorev/>
          <Gorev/>
          <Gorev/>
        </div>
        <div className="gun"> 
          <h3 className="baslik">Salı</h3>
          <Gorev/>
          <Gorev/>
        </div>
        <div className="gun"> 
          <h3 className="baslik">Çarşamba</h3>
          <Gorev/>
        </div>
        <div className="gun"> 
          <h3 className="baslik">Perşembe</h3>
          <Gorev/>
          <Gorev/> 
        </div>
        <div className="gun"> 
          <h3 className="baslik">Cuma</h3>
          <Gorev/> 
        </div>
      </div>
    
    </div> 
    </div>
  );
}

export default App;
