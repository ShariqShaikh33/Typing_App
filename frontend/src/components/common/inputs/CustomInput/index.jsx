import React from 'react'

function CustomInput({text,placeholder,id,onChange}) {
  return (
    <div className='flex flex-col gap-2 w-4/5 p-2'>
          <label className='text-xl' htmlFor={id}>{text}</label>
          <input 
            onChange={onChange}
            className=' min-w-60 min-h-10 bg-[var(--secondary-color)] rounded-md pl-2' 
            type={id} 
            placeholder={placeholder}
            id={id}></input>
    </div>
  )
}

export default CustomInput
