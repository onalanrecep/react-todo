import React, { Component } from 'react';
import axios from "axios";

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
     case "UPDATE_GOREV" :
       return {
         ...state,
         gorevler : state.gorevler.map(gorev => gorev.id === action.payload.id ? action.payload : gorev)
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

      componentDidMount = async () => {
        //uygulama yüklediğinizde server-json'u başlatırken 3004 portunda başlatın
        const response = await axios.get("http://localhost:3004/gorevler")
        this.setState({
          gorevler : response.data
        })
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
