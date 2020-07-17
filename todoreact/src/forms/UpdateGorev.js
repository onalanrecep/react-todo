import React, { Component } from 'react'
import GorevConsumer from '../context';
import axios from 'axios';

/* const Animasyon = posed.div({
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
});  */

class UpdateGorev extends Component {

    state = {
        baslik : "",
        tanim : "",
        sorumlu : "",
        durum : "",
        oncelik : ""
    }

    

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount = async () => {
        const {id} = this.props.match.params;
        const response = await axios.get(`http://localhost:3004/gorevler/${id}`);
        const {baslik, tanim, sorumlu, durum, oncelik} = response.data;
        
        this.setState({
            baslik,
            tanim,
            sorumlu,
            durum,
            oncelik
        })

    }
    updateGorev = async (dispatch,e) => {
        e.preventDefault();
        //Görev Güncelleme
        const {id} = this.props.match.params;
        const {baslik, tanim, sorumlu, durum, oncelik} = this.state;
        const updatedGorev = {
            baslik,
            tanim,
            sorumlu,
            durum,
            oncelik
        };

        const response = await axios.put(`http://localhost:3004/gorevler/${id}`, updatedGorev);
        dispatch({type: "UPDATE_GOREV",payload: response.data});
        //Redirect to home
        this.props.history.push("/");
    }

    render() {
        const {baslik, tanim, sorumlu, durum, oncelik} = this.state;


        return <GorevConsumer>

            {
                value => {

                    const {dispatch} = value;

                    return (
                        <div>
                           <h4>{'Görev Güncelle'}</h4>
                            <form onSubmit = {this.updateGorev.bind(this,dispatch)} >
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
                        </div>
                    )
                }
            }

        </GorevConsumer>

        
    }
}

export default UpdateGorev;