import React from 'react'
import Authform from './Authform'
import { loginInputs } from '@/constantes'

const Login = () => {
  return (
    
      <Authform title="Acesse já" subtitle="insira suas credenciais para acessar seus serviços." inputs={loginInputs} link={'/register'}/>

  )
}

export default Login