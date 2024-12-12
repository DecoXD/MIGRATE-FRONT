import React from 'react'
import Login from './Login'
import Register from './Register'
import { registerInputs } from '@/constantes'
import { Link } from 'react-router-dom'
import Input from '../shared/Input'
import { AuthFormProps, RegisterInputs } from '@/types/auth'

const Authform = ({title,subtitle,inputs,link,handleChange,handleSubmit,formItens,action,isPending}:AuthFormProps) => {
  
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-20">
      <form onSubmit={handleSubmit} className="  text-black flex flex-col  w-full max-w-xl min-h-[450px] p-4  rounded-lg pt-6 py-4">
        <div className=" flex flex-col gap-4 text-center">
          <h2 className='text-4xl font-bold'>{title}</h2>
          <p className='text-xs text-slate-700 font-medium'>{subtitle}</p>
          <div className=" flex flex-col gap-4 "> 
            {
              inputs.map((input:RegisterInputs,idx:number) =>{
              return <Input {...input} key={`${input.name}#${idx}`} handleChange={handleChange} value={formItens[input.name]}/>
              })
            }
            </div>

          <button type="submit"
          className='border-none w-full p-3 bg-secondary text-white font-medium rounded-lg' disabled = {isPending} >{action}</button>
          <p className='text-sm font-medium'>já possui uma conta? <Link to={link} className='text-secondary '>entre já</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Authform