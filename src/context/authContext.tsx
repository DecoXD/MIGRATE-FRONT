import { getUser, login, logoff,  } from "@/api/backend/authApi";
import { useCreateUser } from "@/lib/react-query/queriesAndMutations";
import { UserProps } from "@/types/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";

type AuthProviderProps = {
  children:React.ReactNode
}

type AuthContextProps = {
  user: UserProps | null;
  userToken: string | null;
  setUserToken: (token: string | null) => void;
  logoff: () => void;
  isLoading:Boolean;
}


/*!important*/ 

// todo: put auth methods inside react query instead directly implementation

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

function AuthContextProvider ({children}:AuthProviderProps){
  
  const [userToken,setUserToken] = useState(localStorage.getItem('token'))
  //!important deixar apenas o getuser aqui
  const {data:user,isLoading,isError} = useQuery({
    queryFn:async () =>{
      try {
        return await getUser()
      } catch (error) {
        console.log(error)
        return null
      }
    },
    queryKey:['user',userToken],
    enabled:!!userToken,
    staleTime:1000 * 60 * 60
  })

  const value = {user,userToken,setUserToken,logoff,isLoading}
  //invalidate user query key when i realize logoff


  useEffect(() =>{
    if(userToken){
      if(!localStorage.getItem('token')){
        localStorage.setItem('token',userToken)
      } 
    } else{
      localStorage.removeItem('token')
    }
  },[userToken])



  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
export default AuthContextProvider


// export const AuthContext = createContext(null);

//  function AuthContextProvider ({children}:AuthProviderProps){
//   const [userToken,setUserToken] = useState(localStorage.getItem('token'))
  
//   const value = {register,userToken,setUserToken,logoff,login}
// useEffect(() =>{
//   if(userToken){
//     if(!localStorage.getItem('token')){
//       localStorage.setItem('token',userToken)
//     } 
//   } else{
//     localStorage.removeItem('token')
//   }
// },[userToken])
//   return(
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthContextProvider