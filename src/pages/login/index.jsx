import { useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import useAuth from '../../hooks/useAuth'
import {
  Container,
  Content,
  LabelError,
  RegisterText,
  SignUpText,
  Title
} from './style'
import Input from '../../components/Input'
import Button from '../../components/Button'

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()

  const { signin } = useAuth()

  useEffect(() => {
    localStorage.setItem('user_token', '{}')
  }, [])

  const handleLogin = () => {
    if (!email | !password) {
      setError('Preencha todos os campos')
      return
    }

    const res = signin(email, password)

    if (res) {
      setError(res)
      return
    } else {
      Router.push('/login/logged')
    }
  }

  return (
    <Container>
      <Content>
        <Title>Login</Title>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={e => [setEmail(e.target.value), setError('')]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={e => [setPassword(e.target.value), setError('')]}
        />
        <LabelError>{error}</LabelError>
        <Button text="Login" onClick={() => handleLogin()} />

        <SignUpText>Não tem uma conta?</SignUpText>
        <Link href="/login/register">
          <RegisterText>Registre-se</RegisterText>
        </Link>
      </Content>
    </Container>
  )
}

export default Login
