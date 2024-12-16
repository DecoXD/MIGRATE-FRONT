import React, { useContext, useState } from 'react'
import Authform from './Authform'
import { loginInputs } from '@/constantes'
import { AuthContext } from '@/context/authContext'
import { toast } from 'sonner'
import { useAccessAccount } from '@/lib/react-query/queriesAndMutations'

const Login = () => {

  const {setUserToken} = useContext(AuthContext)
  const {mutateAsync:login,isPending} = useAccessAccount()
  const [formItens,setFormItens] = useState({password:"",email:""})
  
  function handleChange(e,name){
    e.preventDefault()
    setFormItens(prev =>({...prev,[name]:e.target.value}))
    
  }
  
  async function handleSubmit(e){

    e.preventDefault()
 
    let allFieldsAreFilled = !(Object.values(formItens).some((val) => {return !val || val === '0'} ))

    if(!allFieldsAreFilled) return toast.error("preencha os campos corretamente")

    try {
      const token = await login(formItens)
      if(!token){
        return
      }
      localStorage.setItem('token',token)
      setUserToken(token)

    } catch (error) {
      toast.error('algo errado aconteceu')
      console.log(error)
    }
  }
  return (
    
      <Authform 
        title="Acesse já" 
        subtitle="insira suas credenciais para acessar seus serviços."
        inputs={loginInputs}
        formItens= {formItens}
        link={'/register'}
        action ="login"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isPending={isPending}
       />

  )
}

export default Login