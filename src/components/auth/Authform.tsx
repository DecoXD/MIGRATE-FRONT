import React from 'react'
import Login from './Login'
import Register from './Register'
import { registerInputs } from '@/constantes'
import { Input } from '../ui/input'
import { Link } from 'react-router-dom'

const Authform = ({title,subtitle,inputs,link}) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-20">
      <form className="  text-black flex flex-col  w-full max-w-xl min-h-[450px] p-4  rounded-lg pt-6 py-4">
        <div className=" flex flex-col gap-4 text-center">
          <h2 className='text-4xl font-bold'>{title}</h2>
          <p className='text-xs text-slate-700 font-medium'>{subtitle}</p>
          <div className=" flex flex-col gap-4 "> 
            {
              inputs.map((input,idx) =>{
              return <Input {...input} key={idx}/>
              })
            }
            </div>

          <button type="submit"
          className='border-none w-full p-3 bg-secondary text-white font-medium rounded-lg'>Register</button>
          <p className='text-sm font-medium'>já possui uma conta? <Link to={link} className='text-secondary '>entre já</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Authform