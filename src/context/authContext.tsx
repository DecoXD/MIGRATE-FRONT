import { getUser, login, logoff,  } from "@/api/backend/authApi";
import { useCreateUser } from "@/lib/react-query/queriesAndMutations";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";

type AuthProviderProps = {
  children:React.ReactNode
}

/*!important*/ 

// todo: put auth methods inside react query instead directly implementation

export const AuthContext = createContext(null);

function AuthContextProvider ({children}:AuthProviderProps){
  const queryClient = useQueryClient()
  const [userToken,setUserToken] = useState(localStorage.getItem('token'))
  
 

  const value = {userToken,setUserToken,logoff,login}
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