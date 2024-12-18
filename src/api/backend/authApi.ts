import { LoginUserProps, RegisterUserProps, UserProps } from '@/types/auth';
import api from 'axios';


import { toast } from 'sonner';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';




export async function register({name,email,password}:RegisterUserProps) {
  try {
    const response = await api.post(`${API_BASE_URL}/api/createaccount`,{name,email,password}) 
    toast.success(response.data.message)
    return response.data.token
  
  } catch (error) {
    toast.error(error.response.data.message)
    return false
  }
}


export async function login({email,password}:LoginUserProps):Promise<string>{
  try {
    const response = await api.post(`${API_BASE_URL}/api/signin`,{email,password})
    toast.success(response.data.message)
    return response.data.token
  } catch (error) {
    toast.error(error.response.data.message)
    return null
  }
}

export async function logoff(){
  try {
    localStorage.removeItem('token')
    toast.success('Você foi deslogado, Até mais !')
  } catch (error) {
    console.log(error)
  }
}


export async function getUser():Promise<UserProps>{
  try {
    const token = localStorage.getItem('token')
    const response = await api.get(`${API_BASE_URL}/api/getuser`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
   console.log(response)
    return response.data.user
  } catch (error) {
    console.log(error)
  }
}



