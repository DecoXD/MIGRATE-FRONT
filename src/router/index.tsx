import { TooltipProvider } from "@/components/ui/tooltip";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import AuthPage from "@/pages/Auth/AuthPage";
import Cart from "@/pages/Cart";
import Contact from "@/pages/Contact";
import Dashboard from "@/pages/Dashboard/Dashboard";
import { DashboardIndex, DashboardProducts, Notifications, Orders, Settings, Users } from "@/pages/Dashboard/Sections";
import Index from "@/pages/Home/Index";
import ProductDetails from "@/pages/ProductDetails";
import Products from "@/pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Layout } from "@/components/Layout";
import NotFound404 from "@/pages/NotFound404";
import AdminRoute from "./AdminRoute";
import Loader from "@/components/Loader";
import CreateProduct from "@/pages/Dashboard/Sections/CreateProduct";

const router = createBrowserRouter([
 {
  element:<Layout/>,
  errorElement:<NotFound404/>,
  children:[
    {
      path:'/',
      element:<Index/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/products",
      element:<Products/>
    },
    {
      path:"/products/:id",
      element:<ProductDetails/>
    },
    {
      path:"/dashboard",
      element:<ProtectedRouter Element={<Dashboard/>}/>,
      children:[
        {
          path:"/dashboard/",
          element:<DashboardIndex/>
        },
        {
          path:"/dashboard/notifications",
          element:<Notifications/>
        },
        {
          path:"/dashboard/orders",
          element:<AdminRoute Element={<Orders/>}/>,
          
        },
        {
          path:"/dashboard/users",
          element:<AdminRoute Element={<Users/>}/>
        },
        {
          path:"/dashboard/products",
          element:<AdminRoute Element={<DashboardProducts/>}/>
        },
        {
          path:"/dashboard/settings",
          element:<Settings/>,
  
        },
        {
          path:"/dashboard/products/add",
          element:<AdminRoute Element={<CreateProduct/>}/>,
        },
      ]
    },
    {
      
      element:<ProtectedRouter Element={<AuthPage/>} isAuth={true}/>,
      children:[
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        }
      ]
    },
    {
      path:"/contact",
      element:<Contact/>
    },
  ],
 
 
 }
])

export default function App(){
  return(
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router}/>
    </TooltipProvider> 
     )
    
}