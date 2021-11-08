import React, { useState } from 'react';

import './styles.css';

import { FiMail, FiLock } from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import fogueteImg from '../../assets/img/foguete.svg';
import tituloImg from '../../assets/img/titulo.svg';

import api from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function validarDados() {
    try {
      await yup
        .string()
        .required(() => {
          alert('Este campo é obrigatório');
        })
        .email(() => {
          alert('Formato de email inválido');
        })
        .validate(email);
    } catch {
      return false;
    }
    // Validando Senha
    try {
      await yup
        .string()
        .required(() => {
          alert('Este campo é obrigatório');
        })
        .validate(password);
    } catch {
      return false;
    }

    return true;
  }

  async function handleLogin(e) {
    e.preventDefault();

    const validated = await validarDados();

    if (validated) {
      try {
        // eslint-disable-next-line no-undef
        const response = await api.post('session', { email, password });
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('token', response.data.token);
        history.push('/config');
      } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err.response.data.error);
      }
    }
  }

  return (
    <>
      <div className="titulo">
        <img src={tituloImg} alt="titulo" />
      </div>

      <div className="login-container">
        <h2 className="titulo-container">Faça seu login</h2>

        <div className="centralizar-container">
          <form onSubmit={handleLogin}>
            <div className="input-container">
              <FiMail
                size={24}
                color="#757575"
                className="input-container-img"
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-container">
              <FiLock
                size={24}
                color="#757575"
                className="input-container-img"
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={handleLogin}
              className="button-purple"
              type="submit"
            >
              ENTRAR
            </button>
          </form>
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
