import React from 'react';

import './styles.css';

import { FiMail, FiLock } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import fogueteImg from '../../assets/img/foguete.svg';
import tituloImg from '../../assets/img/titulo.svg';

function Login() {
  return (
    <>
      <div className="titulo">
        {' '}
        <img src={tituloImg} alt="titulo" />
      </div>

      <div className="login-container">
        <h2 className="titulo-container">Faça seu login</h2>

        <div className="centralizar-container">
          <div className="input-container">
            <FiMail size={24} color="#757575" />
            <input type="email" placeholder="E-mail" />
          </div>

          <div className="input-container">
            <FiLock size={24} color="#757575" />
            <input type="password" placeholder="Senha" />
          </div>

          <p>
            <Link to="/recover">Esqueci minha senha</Link>
          </p>

          <button className="button-purple" type="submit">
            ENTRAR
          </button>
        </div>

        <div className="registre-container">
          <p>Não tem uma conta?</p>
          <p>
            <Link to="/register">Registre-se</Link>
          </p>
        </div>

        <img className="foguete" src={fogueteImg} alt="foguete" />
      </div>
    </>
  );
}

export default Login;
