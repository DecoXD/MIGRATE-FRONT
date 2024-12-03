import { logoff, register } from "@/api/backend/authApi";
import { createContext, useEffect, useState } from "react";

type AuthProviderProps = {
  children:React.ReactNode
}

export const AuthContext = createContext(null);

 function AuthContextProvider ({children}:AuthProviderProps){
  const [userToken,setUserToken] = useState(localStorage.getItem('token'))

  const value = {register,userToken,setUserToken,logoff}
  useEffect(() => {
    if (userToken) {
      localStorage.setItem('token', userToken);
    } else {
      localStorage.removeItem('token');
    }
  }, [userToken]);

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider