import React, { Component } from 'react';

const GorevContext = React.createContext();

//Provider, Consumer
const reducer = (state, action) => {
  switch(action.type) {
    case "DELETE_GOREV" :
      return {
        ...state,
        gorevler : state.gorevler.filter(gorev => action.payload !== gorev.id)
      }
   case "ADD_GOREV" :
     return {
       ...state,
       gorevler : [...state.gorevler,action.payload]
     }
      default:
        return state
  }
}

export class GorevProvider extends Component {
    state = {
        gorevler : [
          { 
            id: "unique-1",
            baslik: "Görev 1",
            tanim: "Deneme içerik",
            sorumlu: "Recep Önalan",
            durum: "Beklemede",
            oncelik: "Acil"
          },
          { 
            id: "unique-2",
            baslik: "Görev 2",
            tanim: "Deneme içerik başka",
            sorumlu: "Recep Önalan",
            durum: "İşlemde",
            oncelik: "Orta"
          },
          { 
            id: "unique-3",
            baslik: "Gorev 3",
            tanim: "Artık denemeleri bırak",
            sorumlu: "Recep Önalan",
            durum: "İşlemde",
            oncelik: "Acil"
          },
          { 
            id: "unique-4",
            baslik: "Gorev 4",
            tanim: "Ne biz deneme oldu",
            sorumlu: "Recep Önalan",
            durum: "İşlemde",
            oncelik: "Acil"
          },
          {
            id: "unique-5",
            baslik: "Gorev 5",
            tanim: "Ne biz deneme oldu",
            sorumlu: "Recep Önalan",
            durum: "İşlemde",
            oncelik: "Acil"
          }
    
        ],
        dispatch : action => {
          this.setState(state => reducer(state,action)) 
        }
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
