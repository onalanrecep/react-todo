import React, { Component } from 'react';
import Navbar from './components/Navbar';
//import Gorev from './components/Gorev';
import Gorevler from './components/Gorevler';
import './App.css';


class App extends Component {
  state = {
    gorevler : [
      { 
        id: 1,
        baslik: "Görev 1",
        tanim: "Deneme içerik",
        sorumlu: "Recep Önalan",
        durum: "Beklemede",
        oncelik: "Acil"
      },
      { 
        id: 2,
        baslik: "Görev 2",
        tanim: "Deneme içerik başka",
        sorumlu: "Hicran Üçgül",
        durum: "İşlemde",
        oncelik: "Orta"
      },
      { 
        id: 3,
        baslik: "Gorev 3",
        tanim: "Artık denemeleri bırak",
        sorumlu: "Recep Önalan",
        durum: "İşlemde",
        oncelik: "Acil"
      }

    ]
  }

render() {

  return (
    <div className="App">
      
      <div className="todo"> 
        <Navbar/>
      <div className="gunler">
        <div className="gun"> 
          <h3 className="baslik">Pazartesi</h3>
          <Gorevler gorevler = {this.state.gorevler}         />
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
}
export default App;
