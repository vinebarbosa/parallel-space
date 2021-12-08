import React, { useState, createRef } from 'react'

import { Link, useHistory } from 'react-router-dom';
import { useAuth  } from '../../hooks/Authentication'
import * as yup from 'yup';

import fogueteImg from '../../assets/img/foguete.png';
import tituloImg from '../../assets/img/titulo.svg';

import { Container } from './styles'
import { Input } from '../../components/Input';
import { Card } from '../../components/Card';
import { SubmitButton } from '../../components/SubmitButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const { Login } = useAuth()

  const inputEmail = createRef()
  const inputPassword = createRef()

  async function validarDados() {
    try {
      await yup
        .string()
        .required(() => {
          inputEmail.current.focusOnError()
          alert('O campo é obrigatório');
        })
        .email(() => {
          inputEmail.current.focusOnError()
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
          inputPassword.current.focusOnError()
          alert('O campo é obrigatório');
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

      const response = await Login(email, password)

      if (response === 'Usuário não cadastrado') {
        inputEmail.current.focusOnError()
        alert(response)
      } else if (response === 'Senha incorreta') {
        inputPassword.current.focusOnError()
        alert(response)
      }
    }
  }

  return (
    <Container>
      <img src={tituloImg} alt="titulo" className="titulo" />

      <Card altura="450px">
        <h2 className="titulo">Faça seu login</h2>

        <form onSubmit={handleLogin}>
          <Input
            ref={inputEmail}
            placeholder="Seu e-mail"
            name="mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              inputEmail.current.resetError()
            }}
            onBlur={() => {
              inputEmail.current.handleBlur()
              if (email !== '') inputEmail.current.fielled()
              else inputEmail.current.unfielled()
            }}
          />
          <Input
            ref={inputPassword}
            placeholder="Sua senha"
            name="pass"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              inputPassword.current.resetError()
            }}
            onBlur={() => {
              inputPassword.current.handleBlur()
              if (password !== '') inputPassword.current.fielled()
              else inputPassword.current.unfielled()
            }}
            security="on"
          />

          <SubmitButton>ENTRAR</SubmitButton>
        </form>

        <div className="register-area">
          <p>Não tem uma conta?</p>
          <Link to="/register" className="register-link">Registre-se</Link>
        </div>
      </Card>

      <img src={fogueteImg} alt="foguete" className="foguete" />
    </Container>
  );
}
