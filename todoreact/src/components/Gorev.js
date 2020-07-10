import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GorevConsumer from '../context';

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

    onDeleteGorev = (dispatch,e) => {
        const {id} = this.props;
        dispatch({type: "DELETE_GOREV", payload:id});
    }

    render() {
        //Destructing
        const {baslik,tanim,sorumlu,durum,oncelik} = this.props;
        const {isVisible} = this.state;
        return(
            <GorevConsumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (  
                            <div className="gorev-card">
                            <div className="gorev-baslik">
                                <h4 className="gor-bas" onClick = {this.onClickEvent.bind(this)}>{baslik}</h4>
                                <i onClick = {this.onDeleteGorev.bind(this,dispatch)} class="fas fa-trash-alt icon"></i>
                            </div>
                                {
                                    isVisible ? <div>
                                    <p>{tanim}</p>
                                    <div className="gor-durumlar">
                                    <div className="durumlar">{sorumlu}</div>
                                    <div className="durumlar">{durum}</div>
                                    <div className="durumlar">{oncelik}</div>
                                    </div>
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
    id : PropTypes.number.isRequired,
    baslik : PropTypes.string.isRequired,
    tanim : PropTypes.string.isRequired,
    sorumlu : PropTypes.string.isRequired,
    durum : PropTypes.string.isRequired,
    oncelik : PropTypes.string.isRequired
}

export default Gorev;
