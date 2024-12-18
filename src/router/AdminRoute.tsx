import Loader from "@/components/Loader"
import { AuthContext } from "@/context/authContext"

import { useContext } from "react"
import { Navigate } from "react-router-dom"

type AdminRouterProps = {
  Element:JSX.Element,
 
}


const AdminRoute = ({Element}:AdminRouterProps):JSX.Element => {
  const {user,isLoading} = useContext(AuthContext)

  if(isLoading) return <Loader/>
  
  if(!user){
    return <Navigate to={'/'}/>
  }
  switch (user.role) {
    case "USER":
      return <Navigate to={'/dashboard'}/>
      break;
    case "ADMIN":
      return Element
    default:
      return <Navigate to={'/'}/>
      break;
  }

}

export default AdminRoute