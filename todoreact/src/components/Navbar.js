import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="nav">
                    <h1>{'React To-Do'}</h1>
                </div>
            <div className="nav">
                <div><Link to = "/">Anasayfa</Link> </div>
                <div><Link to = "/add">Görev ekle</Link></div>
            </div>   
            </div>
        )
    }
}

export default Navbar;
