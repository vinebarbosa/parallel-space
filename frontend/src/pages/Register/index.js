import React, { useState } from 'react';

import './styles.css';
import {
  FiMail,
  FiLock,
  FiUser,
  FiEye,
  FiEyeOff,
  FiArrowLeft,
} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import tituloImg from '../../assets/img/titulo.svg';

// eslint-disable-next-line no-unused-vars
import api from '../../services/api';

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const history = useHistory();
  async function validarDados() {
    // Validando email
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

    // Validando Nome
    try {
      await yup
        .string()
        .required(() => {
          alert('Este campo é obrigatório');
        })
        .validate(name);
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
      if (confirmpassword !== password) {
        alert('As senhas não coincidem');
        return false;
      }
    } catch {
      return false;
    }

    return true;
  }

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      email,
      name,
      password,
      confirmpassword,
    };

    const validated = await validarDados();

    if (validated) {
      try {
        const response = await api.post('user', data);
        // eslint-disable-next-line no-alert
        alert(`seu ID de acesso é ${response.data.id}`);
        history.push('/');
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

      <div className="register-container">
        <h2 className="titulo-container">Crie sua conta</h2>

        <div className="centralizar-container">
          <form onSubmit={handleRegister}>
            <div className="input-container">
              <FiMail size={24} color="#757575" />
              <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-container">
              <FiUser size={24} color="#757575" />
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-container">
              <FiLock size={24} color="#757575" />
              <input
                type="password"
                placeholder="Sua Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FiEye size={18} color="#757575" />
            </div>

            <div className="input-container">
              <FiLock size={24} color="#757575" />
              <input
                type="password"
                placeholder="Confirme sua Senha"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <FiEyeOff size={18} color="#757575" />
            </div>

            <button className="button-purple" type="submit">
              {' '}
              CADASTRAR
            </button>
          </form>
        </div>
      </div>

      <div className="back">
        <FiArrowLeft size={24} color="#8257E5" />
        <div>
          <Link to="/"> Voltar para login</Link>
        </div>
      </div>
    </>
  );
}
