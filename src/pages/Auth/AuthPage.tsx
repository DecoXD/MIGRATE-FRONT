import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import { registerInputs } from '@/constantes'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthPage = () => {
  return (
    <>
      <Outlet/>
    </>
    )
}

export default AuthPage