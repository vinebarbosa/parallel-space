import React from 'react'

import './styles.css'

import { FiMail, FiLock } from 'react-icons/fi'

import fogueteImg from "./../../assets/img/foguete.png"

function Login() {
    return (
        <>
            <h1 className="titulo">Parallel Space JS</h1>
            
            <div className="login-container">
                <h2>Faça seu login</h2>

                <div className="centralizar-container" >
                    <div className="input-container">
                        <FiMail className="input-container-img" size={24} color="#757575"/>
                        <input type="email" placeholder="E-mail"/>
                    </div>

                    <div className="input-container">
                        <FiLock className="input-container-img" size={24} color="#757575"/>
                        <input type="password" placeholder="Senha"/>
                    </div>

                    <p><a href="/">Esqueci minha senha</a></p>

                    <button type="submit">ENTRAR</button>
                </div>

                <div className="registre-container">
                    <p>Não tem uma conta?</p>
                    <p><a href="/">Registre-se</a></p>
                </div>

                <img className="foguete" src={fogueteImg} alt="foguete"/>

            </div>
        </>
    )
}

export default Login;
