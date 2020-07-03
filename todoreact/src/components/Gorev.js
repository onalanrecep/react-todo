import React, { Component } from 'react'

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

export default Gorev;
