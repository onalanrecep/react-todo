import React from 'react';
import Navbar from './components/Navbar';
import Gorev from './components/Gorev';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="todo"> 
        <Navbar/>
      <div className="gunler">
        <div className="gun"> 
          <h3 className="baslik">Pazartesi</h3>
          <Gorev
            baslik = "Görev 1"
            tanim = "lorem ipsum deneme ve deneme daha da deneme"
            sorumlu = "Falan"
            oncelik = "Acil"
            durum = "İşlemde"
          />
        </div>
        <div className="gun"> 
          <h3 className="baslik">Salı</h3>
        </div>
        <div className="gun"> 
          <h3 className="baslik">Çarşamba</h3>
        </div>
        <div className="gun"> 
          <h3 className="baslik">Perşembe</h3>
        </div>
        <div className="gun"> 
          <h3 className="baslik">Cuma</h3>
        </div>
      </div>
    
    </div> 
    </div>
  );
}

export default App;
