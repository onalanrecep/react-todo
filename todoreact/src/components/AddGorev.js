import React, { Component } from 'react'
import posed from 'react-pose';
import GorevConsumer from '../context';
var uniqid = require('uniqid');

const Animasyon = posed.div({
    visible : {
        opacity : 1,
        applyAtStart : {
            display : "block"
        }
        
    },
    hidden : {
        opacity : 0,
        applyAtEnd : {
            display : "none"
        }
    }
}); 

class AddGorev extends Component {

    state = {
        visible : false,
        baslik : "",
        tanim : "",
        sorumlu : "",
        durum : "",
        oncelik : ""
    }

    saklaGoster =(e) => {
        this.setState({
            visible : !this.state.visible
        })
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addGorev = (dispatch,e) => {
        e.preventDefault();
        const {baslik, tanim, sorumlu, durum, oncelik} =  this.state;

        const newGorev = {
            id : uniqid(),
            baslik,
            tanim,
            sorumlu,
            durum,
            oncelik
        }
        dispatch({type : "ADD_GOREV", payload : newGorev})
    }

    render() {
        const {visible, baslik, tanim, sorumlu, durum, oncelik} = this.state;


        return <GorevConsumer>

            {
                value => {

                    const {dispatch} = value;

                    return (
                        <div>
                        <button onClick = {this.saklaGoster} >{ visible ? "Formu Gizle" : "Görev Ekle" }</button>
                        <Animasyon pose = {visible ? "visible" : "hidden"} >
                           <h4>{'Görev Ekle'}</h4>
                            <form onSubmit = {this.addGorev.bind(this,dispatch)} >
                                <div>
                                    <label htmlFor="baslik">Başlık</label>
                                    <input
                                    type="text"
                                    name="baslik"
                                    id="baslik"
                                    placeholder="Başlık Giriniz"
                                    value = {baslik}
                                    onChange = {this.changeInput}
                                    />
                                    <label htmlFor="tanim">Tanım</label>
                                    <input
                                    type="text"
                                    name="tanim"
                                    id="tanim"
                                    placeholder="Tanım Giriniz"
                                    value = {tanim}
                                    onChange = {this.changeInput}
                                    />
                                    <label htmlFor="sorumlu">Sorumlu</label>
                                    <input
                                    type="text"
                                    name="sorumlu"
                                    id="sorumlu"
                                    placeholder="Sorumlu Giriniz"
                                    value = {sorumlu}
                                    onChange = {this.changeInput}
                                    />
                                    <label htmlFor="durum">Durum</label>
                                    <input
                                    type="text"
                                    name="durum"
                                    id="durum"
                                    placeholder="Durum Giriniz"
                                    value = {durum}
                                    onChange = {this.changeInput}
                                    />
                                    <label htmlFor="oncelik">Öncelik</label>
                                    <input
                                    type="text"
                                    name="oncelik"
                                    id="oncelik"
                                    placeholder="Öncelik Giriniz"
                                    value = {oncelik}
                                    onChange = {this.changeInput}
                                    />
                                </div>
                                <button type="submit">{'Kaydet'}</button>
                            </form>
                        </Animasyon>
                        </div>
                    )
                }
            }

        </GorevConsumer>

        
    }
}

export default AddGorev;