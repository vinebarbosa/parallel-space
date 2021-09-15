import React from 'react'

import './styles.css'

import { FiMail, FiLock } from 'react-icons/fi'

import fogueteImg from "./../../assets/img/foguete.png"

import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <h1 className="titulo">Parallel Space JS</h1>
            
            <div className="login-container">
                <h2 className="titulo-container">Faça seu login</h2>

                <div className="centralizar-container" >
                    <div className="input-container">
                        <FiMail size={24} color="#757575"/>
                        <input type="email" placeholder="E-mail"/>
                    </div>

                    <div className="input-container">
                        <FiLock size={24} color="#757575"/>
                        <input type="password" placeholder="Senha"/>
                    </div>

                    <p><Link to="/recover">Esqueci minha senha</Link></p>

                    <button className="button-purple" type="submit">ENTRAR</button>
                </div>

                <div className="registre-container">
                    <p>Não tem uma conta?</p>
                    <p><Link to="/register">Registre-se</Link></p>
                </div>

                <img className="foguete" src={fogueteImg} alt="foguete"/>

            </div>
        </>
    )
}

export default Login;
