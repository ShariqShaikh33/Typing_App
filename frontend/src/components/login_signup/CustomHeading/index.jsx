import React from 'react'

function LoginHeading({heading}) {
  return (
    <div className='flex justify-center items-center border-b-2 w-4/5 h-15 border-1'>
          <h1 className='text-3xl font-bold'>{heading}</h1>
    </div>
  )
}

export default LoginHeading
