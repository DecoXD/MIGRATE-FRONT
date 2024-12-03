import React from 'react'

const Input = ({name,type,placeholder,icon,handleChange}) => {
  return (
   <label className="flex flex-col items-start gap-1 relative ">
    <span className='capitalize font-semibold text-base text-slate-600'>{name}</span>
    <div className="relative w-full flex items-center ">
      <img src={icon} alt="icon" width={18} className='absolute left-3'/>
      <input 
       className='w-full border-[1px] border-secondary/40 outline-none p-2 rounded-lg pl-10 text-slate-500' 
       type={type} 
       onChange={(e) => handleChange(e,name)}
       placeholder={placeholder}  
       name={name}/>

    </div>
   </label>
  )
}

export default Input