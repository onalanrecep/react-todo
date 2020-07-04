import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    render() {
        //Destructing
        const {baslik,tanim,sorumlu,durum,oncelik} = this.props;
        const {isVisible} = this.state;
        return (  
        <div className="gorev-card">
            <h4 className="gor-bas" onClick = {this.onClickEvent.bind(this)}>{baslik}</h4>
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
Gorev.defaultProps = {
    baslik : "Belirtilmedi",
    tanim : "Belirtilmedi",
    sorumlu : "Belirtilmedi",
    durum : "Belirtilmedi",
    oncelik : "Belirtilmedi"
}

Gorev.propTypes = {
    baslik : PropTypes.string.isRequired,
    tanim : PropTypes.string.isRequired,
    sorumlu : PropTypes.string.isRequired,
    durum : PropTypes.string.isRequired,
    oncelik : PropTypes.string.isRequired
}

export default Gorev;
