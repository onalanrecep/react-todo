import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="nav">
                    <h1>{'React To-Do'}</h1>
                </div>
            <div className="nav">
                <div><button className="nav-btn">{'Sorumlu Ekle'}</button> </div>
                <div><button className="nav-btn">{'Görev Ekle'}</button></div>
            </div>   
            </div>
        )
    }
}

export default Navbar;
