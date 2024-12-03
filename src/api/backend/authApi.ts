import api from 'axios';


import { toast } from 'sonner';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';




export async function register({name,email,password}) {
  try {
    const response = await api.post(`${API_BASE_URL}/api/createaccount`,{name,email,password})
    console.log(response)
    toast.success(response.data.message)
    return response.data.token
  
  } catch (error) {
    toast.error(error.response.data.message)
    return false
  }
}



