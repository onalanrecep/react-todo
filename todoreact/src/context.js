import React, { Component } from 'react';

const GorevContext = React.createContext();

export class GorevProvider extends Component {
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
          },
          { 
            id: 3,
            baslik: "Gorev 4",
            tanim: "Ne biz deneme oldu",
            sorumlu: "Recep Önalan",
            durum: "İşlemde",
            oncelik: "Acil"
          }
    
        ]
      }


    render() {
        return (
            <GorevContext.Provider value = {this.state}>
                {this.props.children}
            </GorevContext.Provider>
        )
    }
}

const GorevConsumer = GorevContext.Consumer;

export default GorevConsumer;
