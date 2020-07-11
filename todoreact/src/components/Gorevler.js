import React, { Component } from 'react'
import Gorev from './Gorev';
import UserConsumer from '../context';

class Gorevler extends Component {
    
    render() {
        
        return (
            <UserConsumer>
                {
                    value => {
                        const {gorevler} = value;
                        return (
                            <div>
                                {
                                    gorevler.map( gorev => {
                
                                        return(
                                            <Gorev
                                                key = {gorev.id}
                                                id = {gorev.id}
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
            </UserConsumer>
        )
    }
}

export default Gorevler;
