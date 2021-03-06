import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GorevConsumer from '../context';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Gorev extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible : false
        }
    }

    onClickEvent = (number, e) => {
        this.setState({
            isVisible : !this.state.isVisible
        })
    }

    onDeleteGorev = async (dispatch, e) => {
        const {id} = this.props;
        //Delete req
        await axios.delete(`http://localhost:3004/gorevler/${id}`)
        //Consumer Dispatch
        dispatch({type : "DELETE_GOREV", payload :id});
    }

    render() {
        //Destructing
        const {id, baslik, tanim, sorumlu, durum, oncelik} = this.props;
        const {isVisible} = this.state;
        return(
            <GorevConsumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (  
                            <div className="gorev-card" style = { isVisible ? {backgroundColor : "#62848d", color : "white"} : null }>
                            <div className="gorev-baslik">
                                <h4 className="gor-bas" onClick = {this.onClickEvent.bind(this)}>{baslik}</h4>
                                
                                <i onClick = {this.onDeleteGorev.bind(this, dispatch)} className="fas fa-trash-alt icon"></i>
                            </div>
                                {
                                    isVisible ? <div>
                                    <p>{tanim}</p>
                                    <div className="gor-durumlar">
                                        <div className="durumlar">{sorumlu}</div>
                                        <div className="durumlar">{durum}</div>
                                        <div className="durumlar">{oncelik}</div>
                                    </div>
                                    <Link to = {`edit/${id}`} className = "btn">Görevi Güncelle</Link>
                                </div> : null
                                }
                    
                            </div>    
                            )

                    }
                }
            </GorevConsumer>
        )
        
    }
}
Gorev.defaultProps = {
    
    baslik : "Belirtilmedi",
    tanim : "Belirtilmedi",
    sorumlu : "Belirtilmedi",
    durum : "Belirtilmedi",
    oncelik : "Belirtilmedi"
}

Gorev.propTypes = {

    id : PropTypes.string.isRequired,
    baslik : PropTypes.string.isRequired,
    tanim : PropTypes.string.isRequired,
    sorumlu : PropTypes.string.isRequired,
    durum : PropTypes.string.isRequired,
    oncelik : PropTypes.string.isRequired
}

export default Gorev;
