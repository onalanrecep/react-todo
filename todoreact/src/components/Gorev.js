import React, { Component } from 'react'

class Gorev extends Component {
    render() {
        return (  
        <div className="gorev-card">
            <h4 className="gor-bas">{this.props.baslik}</h4>
            <p>{this.props.tanim}</p>
            <div className="gor-durumlar">
              <div className="durumlar">{this.props.sorumlu}</div>
              <div className="durumlar">{this.props.durum}</div>
              <div className="durumlar">{this.props.oncelik}</div>
            </div>
        </div>    
        )
    }
}

export default Gorev;
