import React from 'react'

import Logo from '../images/logo-insta.png'

import './Login.css'
import NewAccount from './NewAccount'

const Login = props => {
    return (
        <div className="content">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="group-login">
                    <div className="input-login">
                        <input type="text" placeholder='Telefone, nome do usuário ou email' />
                        <input type="text" placeholder='Senha' />
                    </div>
                    <div className="btn-login">
                        <a href="#">Entrar</a>
                    </div>
                </div>
                <div className="container-hr">
                    <div></div>
                    <p>OU</p>
                    <div></div>
                </div>
                <div className="login-face">
                    <a href="#" className='facebook'><i class="fab fa-facebook-square"></i> Entrar com o Facebook</a>
                    <a href="#" className='password'>Esqueceu a senha?</a>
                </div>
            </div>
            <NewAccount />
        </div>
    )
}

export default Login