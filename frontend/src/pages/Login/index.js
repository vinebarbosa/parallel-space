import React, { useState, createRef, useEffect } from 'react'

import { Link } from 'react-router-dom';
import { useAuth  } from '../../hooks/Authentication'
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify'

import fogueteImg from '../../assets/img/foguete.png';
import tituloImg from '../../assets/img/titulo.svg';

import { Container } from './styles'
import { Input } from '../../components/Input';
import { Card } from '../../components/Card';
import { SubmitButton } from '../../components/SubmitButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { Login } = useAuth()

  const inputEmail = createRef()
  const inputPassword = createRef()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function tryLogin() {
      if (!isLoading) return

      const validated = await validarDados();

      if (validated) {

        const response = await Login(email, password)

        if (response === 'Usuário não cadastrado') {
          inputEmail.current.focusOnError()
          toast.error('Ops... O email informado não está cadastrado :(')
          setIsLoading(false)
        } else if (response === 'Senha incorreta') {
          inputPassword.current.focusOnError()
          toast.error('Ops... A senha informada está incorreta')
          setIsLoading(false)
        }
      }
    }
    tryLogin()
  }, [isLoading])

  async function validarDados() {
    try {
      await yup
        .string()
        .required(() => {
          inputEmail.current.focusOnError()
          toast.error('Ops... Este campo é obrigatório')
          setIsLoading(false)
        })
        .email(() => {
          inputEmail.current.focusOnError()
          toast.error('Ops... O formato de email informado é inválido')
          setIsLoading(false)
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
          toast.error('Ops... Este campo é obrigatório')
          setIsLoading(false)
        })
        .validate(password);
    } catch {
      return false;
    }

    return true;
  }

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
  }

  return (
    <Container>
      <ToastContainer position='top-right' theme='colored' style={{ fontSize: '18px' }} />
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

          <SubmitButton disable={isLoading} >ENTRAR</SubmitButton>
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
