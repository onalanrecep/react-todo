import React, { Component } from 'react'
import Gorev from './Gorev';

class Gorevler extends Component {
    render() {
        const {gorevler} = this.props;
    
        return (
            <div>
                {
                    gorevler.map( gorev => {
                        return(
                            <Gorev
                                key = {gorev.id}
                                baslik = {gorev.baslik}
                                tanim = {gorev.tanim}
                                sorumlu = {gorev.sorumlu}
                                durum = {gorev.durum}
                                oncelik = {gorev.oncelik}
                            />
                        )
                    })
                }            
            </div>
        )
    }
}

export default Gorevler;
