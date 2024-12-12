import { login, logoff, register } from "@/api/backend/authApi";
import { LoginUserProps, RegisterUserProps } from "@/types/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";



export  function useCreateUser(){
  return useMutation({
    mutationFn:(user:RegisterUserProps) => register(user)
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