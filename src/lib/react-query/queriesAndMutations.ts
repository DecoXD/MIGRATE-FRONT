import { getUser, login, logoff, register } from "@/api/backend/authApi";
import { deleteProduct, getAllProducts } from "@/api/backend/productApi";
import { LoginUserProps, RegisterUserProps } from "@/types/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


// Auth Mutations
export  function useCreateUser(){
  return useMutation({
    mutationFn:(user:RegisterUserProps) => register(user),
    
  })
}


export  function useAccessAccount(){
  return useMutation({
    mutationFn:(user:LoginUserProps) => login(user)
  })
}


export  function useLogoffUser(){
  return useMutation({
    mutationFn:() => logoff()
  })
}

export function useGetUser(){
  return useMutation({
    mutationFn:() => getUser()
  })
}


// Product Mutations

export function useDeleteProduct(){
  const queryClient =useQueryClient()
  return useMutation({
    mutationFn:(id:number) => deleteProduct(id),
    onSuccess:() =>{
      queryClient.invalidateQueries({
        queryKey:['products']
      })
    }
  })
}