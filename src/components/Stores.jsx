import React from 'react'

import AppleStore from '../images/apple-store.png'
import GooglePlay from '../images/google-play.png'

import './Store.css'

const Store = props => {
    return (
        <div className="container-store">
            <p>Obtenha o aplicativo</p>
            <div className="store-images">
                <img src={AppleStore} alt="AppleStore" />
                <img src={GooglePlay} alt="GooglePlay" />
            </div>
        </div>
    )
}

export default Store