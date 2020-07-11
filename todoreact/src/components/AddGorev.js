import React, { Component } from 'react'

class AddGorev extends Component {
    render() {
        return (
            <div>
               <h4>{'Görev Ekle'}</h4>
                <form>
                    <div>
                        <label htmlFor="baslik">Başlık</label>
                        <input
                        type="text"
                        name="baslik"
                        id="baslik"
                        placeholder="Başlık Giriniz"
                        />
                        <label htmlFor="tanim">Tanım</label>
                        <input
                        type="text"
                        name="tanim"
                        id="tanim"
                        placeholder="Tanım Giriniz"
                        />
                        <label htmlFor="sorumlu">Sorumlu</label>
                        <input
                        type="text"
                        name="sorumlu"
                        id="sorumlu"
                        placeholder="Sorumlu Giriniz"
                        />
                        <label htmlFor="durum">Durum</label>
                        <input
                        type="text"
                        name="durum"
                        id="durum"
                        placeholder="Durum Giriniz"
                        />
                        <label htmlFor="oncelik">Öncelik</label>
                        <input
                        type="text"
                        name="oncelik"
                        id="oncelik"
                        placeholder="Öncelik Giriniz"
                        />
                    </div>
                    <button type="submit">{'Görev Ekle'}</button>
                </form>
            </div>
        )
    }
}

export default AddGorev;