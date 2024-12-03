import api from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export async function getAllProducts(){
  try {
    const response = await api.get(`${API_BASE_URL}/api/admin/p/`)
    return response
  } catch (error) {
    return error
  }
}