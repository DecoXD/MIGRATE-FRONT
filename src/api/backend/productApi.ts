import { ProductProps } from '@/types/products/product';
import api from 'axios'
import { toast } from 'sonner';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
const TOKEN = localStorage.getItem('token')
export async function getAllProducts():Promise<ProductProps[]>{
  try {
    const response = await api.get(`${API_BASE_URL}/api/admin/p/`)
    return response.data.response
  } catch (error) {
    return error
  }
}

export async function createProduct(product:ProductProps){
  try {
    const response = await api.post(`${API_BASE_URL}/api/admin/p/create`,
      product,{
        headers:{
          Authorization:`bearer ${TOKEN}`
        }
      }
    )
    console.log(response)
    toast.success(response.data.response.message)

  } catch (error) {
    toast.error(error.data.message)
  }
}

export async function deleteProduct(id:number):Promise<void>{
  try {
    
    const response = await api.delete(`${API_BASE_URL}/api/admin/p/delete`,{
      data:{
        id
      },
      headers:{
        Authorization:`bearer ${TOKEN}`,
        
      }
    })
    console.log(response)
    toast.success(response.data.message)
  } catch (error) {
    toast.error(error.data.message)
    return error
  }
}