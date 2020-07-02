import React, { Component } from 'react'

class Gorev extends Component {
    render() {
        return (  
        <div className="gorev-card">
            <h4 className="gor-bas">Görev 1</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus neque sequi?</p>
            <div className="gor-durumlar">
              <div className="durumlar">Sorumlu</div>
              <div className="durumlar">Durum</div>
              <div className="durumlar">Öncelik</div>
            </div>
        </div>    
        )
    }
}

export default Gorev;
