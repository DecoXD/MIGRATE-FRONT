import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Home/Index";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import NotFound404 from "./pages/NotFound404";
import AuthPage from "./pages/Auth/AuthPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import {DashboardIndex,Notifications, Users} from "./pages/Dashboard/Sections";






const App = () =>{ 
  
  const {userToken}= useContext(AuthContext)

  
  
  return(

    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
     
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/admin" element={<Admin />} />

            <Route path="/dashboard" element={<Dashboard/>}>
              <Route path="/dashboard/" element={<DashboardIndex/>}/>
              <Route path="/dashboard/notifications" element={<Notifications/>}/>
              <Route path="/dashboard/users" element={<Users/>}/>
            </Route>
            <Route element={userToken?<Navigate to={'/'}/>:<AuthPage/>} > 
              <Route element={<Register/>} path="/register"/>
              <Route element={<Login/>}path="/login"/>
            </Route>
              
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/*" element={<NotFound404 />} />
        </Routes>
      
      </BrowserRouter>
    </TooltipProvider>

)};

export default App;