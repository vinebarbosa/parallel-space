import React from 'react'

import './styles.css'
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiArrowLeft } from 'react-icons/fi'

function Register(){
    return(
        <>
            <h1 className="titulo">Parallel Space JS</h1>

            <div className="register-container">
                <h2>Crie sua conta</h2>
                <div className="centralizar-container" >
                    <div className="input-container">
                        <FiMail size={24} color="#757575"/>
                        <input type="email" placeholder="Seu e-mail"/>
                    </div>
                    <div className="input-container">
                        <FiUser  size={24} color="#757575"/>
                        <input type="text" placeholder="Seu nome"/>
                    </div>

                    <div className="input-container">
                        <FiLock size={24} color="#757575"/>
                        <input type="password" placeholder="Sua Senha"/>
                        <FiEye  size={24} color="#757575"/>
                    </div>
                    <div className="input-container">
                        <FiLock size={24} color="#757575"/>
                        <input type="password" placeholder="Confirme sua Senha"/>
                        <FiEyeOff size={24} color="#757575"/>
                    </div>

                    <button type="submit">CADASTRAR</button>
                    
                </div>

                <div className='back'>
                <FiArrowLeft size={24}color='#8257E5'/>
                <p> <a href='#'> Voltar para login</a></p>

                </div>
            </div>

            
        
        
        
        </>
    )
}

export default Register