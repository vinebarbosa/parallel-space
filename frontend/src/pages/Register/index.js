import React, { createRef, useEffect, useState } from 'react';
import { useAuth } from '../../hooks/Authentication'

import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify'

import fogueteImg from '../../assets/img/foguete.png';
import tituloImg from '../../assets/img/titulo.svg';

import { Container } from './styles';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { SubmitButton } from '../../components/SubmitButton';

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { Registro } = useAuth()

  const inputEmail = createRef()
  const inputName = createRef()
  const inputPassword = createRef()
  const inputPassword2 = createRef()

  useEffect(() => {
    async function tryRegister() {
      if (!isLoading) return

      const validated = await validarDados();

      if (!validated) return;

      const response = await Registro(email, password, name)

      if (response === 'OK') {
        toast.success("A criação da sua conta teve êxito. Seja muito bem-vindo à família ❤️")
        setIsLoading(false);
      }

      else {
        toast.error(response)
        setIsLoading(false);
      }
    }

    tryRegister()
  }, [isLoading])

  async function validarDados() {
    // Validando email
    try {
      await yup
        .string()
        .required(() => {
          inputEmail.current.focusOnError();
          toast.error('Ops... Este campo é obrigatório');
          setIsLoading(false);
        })
        .email(() => {
          inputEmail.current.focusOnError();
          toast.error('Ops... O formato de email informado é inválido');
          setIsLoading(false);
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
          inputName.current.focusOnError();
          toast.error('Ops... Este campo é obrigatório');
          setIsLoading(false);
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
          inputPassword.current.focusOnError();
          toast.error('Ops... Este campo é obrigatório');
          setIsLoading(false);
        })
        .validate(password);
      if (confirmpassword !== password) {
        inputPassword2.current.focusOnError();
        toast.error('Ops... As senhas informadas não coincidem');
        setIsLoading(false);
        return false;
      }
    } catch {
      return false;
    }

    return true;
  }

  async function handleRegister(e) {
    e.preventDefault();
    setIsLoading(true);
  }

  return (
    <Container>
      <ToastContainer position='top-right' theme='colored' style={{ fontSize: '18px' }} />

      <img src={tituloImg} alt="titulo" className="titulo" />

      <Card altura="490px">
        <h2 className="titulo">Crie sua conta</h2>

        <form onSubmit={handleRegister}>
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
            ref={inputName}
            placeholder="Seu nome"
            name="user"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              inputName.current.resetError()
            }}
            onBlur={() => {
              inputName.current.handleBlur()
              if (name !== '') inputName.current.fielled()
              else inputName.current.unfielled()
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

          <Input
            ref={inputPassword2}
            placeholder="Sua senha"
            name="pass"
            value={confirmpassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
              inputPassword2.current.resetError()
            }}
            onBlur={() => {
              inputPassword2.current.handleBlur()
              if (confirmpassword !== '') inputPassword2.current.fielled()
              else inputPassword2.current.unfielled()
            }}
            security="on"
          />

          <SubmitButton disable={isLoading} >CADASTRAR</SubmitButton>
        </form>
      </Card>


      <div className="back">
        <FiArrowLeft size={24} color="#8257E5" />
        <div>
          <Link to="/">Voltar para login</Link>
        </div>

      </div>
      <img src={fogueteImg} alt="foguete" className="register-foguete" />

    </Container>
  );
}
