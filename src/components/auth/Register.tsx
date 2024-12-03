import React, { useState } from 'react'
import Input from '../shared/Input'
import Authform from './Authform'
import { registerInputs } from '@/constantes'

const Register = () => {
  const [formItens,setFormItens] = useState({name:"",password:"",confirmPassword:"",email:""})
  //handlechange
  function handleChange(e,name){
    e.preventDefault()
    setFormItens(prev =>({...prev,[name]:e.target.value}))
    console.log(formItens)
  }
  //onsubmit
  function handleSubmit(e){
    e.preventDefault()
  }


  return (
    <Authform 
      title={"Criar conta"} 
      subtitle={"Crie sua conta em menos de 1 minuto."} 
      inputs={registerInputs} 
      link={'/login'}
      handleChange={handleChange}
      handleSubmit={handleSubmit}

      />
  ) 
}

export default Register
