import { useEffect, useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Button from '../../components/Button'
import Input from '../../components/Input'
import useAuth from '../../hooks/useAuth'
import {
  Container,
  Content,
  LabelError,
  RegisterText,
  SignUpText,
  Title
} from './style'

function Register() {
  const [email, setEmail] = useState()
  const [emailConf, setEmailConf] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()

  const { signup } = useAuth()

  const handleLogin = () => {
    if (!email | !emailConf | !password) {
      setError('Preencha todos os campos')
      return
    } else if (email !== emailConf) {
      setError('Os e-mails não são iguais')
      return
    }

    const res = signup(email, password)

    if (res) {
      setError(res)
      return
    }

    alert('Usuário cadastrado com sucesso!')
    Router.push('/login')
  }

  return (
    <Container>
      <Content>
        <Title>Registre-se</Title>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={e => [setEmail(e.target.value), setError('')]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={e => [setEmailConf(e.target.value), setError('')]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={e => [setPassword(e.target.value), setError('')]}
        />
        <LabelError>{error}</LabelError>
        <Button text="Login" onClick={() => handleLogin()} />

        <SignUpText>Já tem uma conta?</SignUpText>
        <Link href="/login">
          <RegisterText>Entre</RegisterText>
        </Link>
      </Content>
    </Container>
  )
}

export default Register
