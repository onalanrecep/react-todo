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
        gorevler : [],
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
