import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Gorev extends Component {
    render() {
        //Destructing
        const {baslik,tanim,sorumlu,durum,oncelik} = this.props;
        return (  
        <div className="gorev-card">
            <h4 className="gor-bas">{baslik}</h4>
            <p>{tanim}</p>
            <div className="gor-durumlar">
              <div className="durumlar">{sorumlu}</div>
              <div className="durumlar">{durum}</div>
              <div className="durumlar">{oncelik}</div>
            </div>
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
