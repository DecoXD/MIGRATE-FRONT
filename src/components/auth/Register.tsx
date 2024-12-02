import React from 'react'
import Input from '../shared/Input'
import Authform from './Authform'
import { registerInputs } from '@/constantes'

const Register = () => {
  return (
    <Authform title={"Criar conta"} subtitle={"Crie sua conta em menos de 1 minuto."} inputs={registerInputs} link={'/login'}/>
  )
}

export default Register
