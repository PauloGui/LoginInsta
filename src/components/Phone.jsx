import React from 'react'
import phone from '../images/phone-instagram.png'
import './Phone.css'

const Phone = props => {
    return(
        <div className="container-image">
            <img src={phone} alt="Phone"/>
        </div>
    )
}

export default Phone