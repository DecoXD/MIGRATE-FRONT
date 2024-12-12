import { AuthContext } from "@/context/authContext"
import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"

type ProtectedRouterProps = {
  Element:JSX.Element,
  isAuth?:boolean
}

const ProtectedRouter = ({Element,isAuth=false}:ProtectedRouterProps) => {
  const {userToken}= useContext(AuthContext)

  //if user is'nt logged or if is logged and as login or register route
  if((!userToken && !isAuth )|| (userToken && isAuth)) {
    return <Navigate to="/" />;
    
  }
  
  return Element
}

export default ProtectedRouter