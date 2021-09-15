import React from 'react'

import './styles.css'

function Login() {
    return (
        <>
            <h1 className="titulo">Parallel Space JS</h1>
            <div className="login-container">
                <h2>Faça seu login</h2>

                <div className="input-container">
                    <input type="email" placeholder="e-mail"/>

                </div>

            </div>
        </>
    )
}

export default Login;
