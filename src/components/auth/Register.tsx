import React, { useContext, useState } from 'react'
import Authform from './Authform'
import { registerInputs } from '@/constantes'
import { toast } from 'sonner'

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/authContext'
import { useCreateUser } from '@/lib/react-query/queriesAndMutations'
const Register = () => {
  const [formItens,setFormItens] = useState({name:"",password:"",confirmPassword:"",email:""})
  const{setUserToken} = useContext(AuthContext)
  const {mutateAsync:register,isPending} = useCreateUser()
  const navigate = useNavigate()
  //handlechange maybe might be passes by context
  function handleChange(e: React.ChangeEvent<HTMLInputElement>,name:string){
    e.preventDefault()
    setFormItens(prev =>({...prev,[name]:e.target.value}))
  }

  //onsubmit
  async function handleSubmit(e:React.FormEvent<HTMLFormElement>){

    e.preventDefault()
 
      //verificar se todos os campos estão preenchidos
      const allFieldsIsFilled = !(Object.values(formItens).some((field) => field.length < 3 || !field))
      
      if(!allFieldsIsFilled) {
        toast.error("Preencha todos os campos corretamente")
        return
      }


      if(formItens.password!==formItens.confirmPassword){
        toast.error("Senhas não conferem")
        return
      }

      try {
        const body = {
          name:formItens.name,
          email:formItens.email,
          password:formItens.password,
        }

        const token = await register(body)

        if(!token) return
      
        localStorage.setItem('token',token)
        setUserToken(token)
        setFormItens({name:'',password:"",confirmPassword:"",email:""})
        navigate('/')

      } catch (error) {

        console.log(error)

      }
  }


  return (
    <Authform 
      title={"Criar conta"} 
      subtitle={"Crie sua conta em menos de 1 minuto."} 
      inputs={registerInputs} 
      link={'/login'}
      action="register"
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formItens = {formItens}
      isPending = {isPending}
      />
  ) 
}

export default Register
