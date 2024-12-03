import React, { useState } from 'react'
import Authform from './Authform'
import { loginInputs } from '@/constantes'

const Login = () => {
  const [formItens,setFormItens] = useState({password:"",email:""})
  //handlechange
  function handleChange(e,name){
    e.preventDefault()
    setFormItens(prev =>({...prev,[name]:e.target.value}))
    
  }
  //onsubmit
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    
      <Authform 
        title="Acesse já" 
        subtitle="insira suas credenciais para acessar seus serviços."
        inputs={loginInputs} 
        link={'/register'}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
       
       />

  )
}

export default Login