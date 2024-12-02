import { Card } from '@/components/ui/card'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound404 = () => {
  return (
    <div className='min-h-screen text-xl text-black flex items-center justify-center'>
        página não encontrada. <Link to={'/'} className=' text-secondary'>voltar ao site</Link>
     
    </div>
  )
}

export default NotFound404