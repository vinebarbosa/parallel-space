import React from "react"

import './styles.css'

import jupterImg from "./../../assets/img/jupter.png"

import { FiMail, FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Recover(){
    return (
        <>
            <div className="jupter" >
                <img src={jupterImg} alt="jupter"/>
            </div>

            <div className='recover-container'> 
                <h1 className='titulo'>Recuperar senha</h1> 
            
                <div className="centralizar-container" >
                    <div className="input-container">
                        <FiMail size={24} color="#757575"/>
                        <input type="email" placeholder="Digite seu e-mail"/>
                    </div>
                    
                    <button type="submit">RECUPERAR</button>
                </div>
            </div>
            <div className='back'>
                <FiArrowLeft size={24}color='#8257E5'/>
                <p> <Link to='/'> Voltar para login</Link></p>
            </div>
        </>
    )

}

export default Recover