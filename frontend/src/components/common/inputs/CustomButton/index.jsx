import React from 'react'

function CustomButton({name, className=""}) {
  return (
    <button className='
              bg-[var(--primary-color)] text-[var(--background-color)] text-xl font-bold w-2/5 h-12 rounded-lg
              hover:bg-[var(--secondary-color)] hover:text-[var(--background-color)] 
              active:bg-[var(--primary-color)] active:text-[var(--background-color)]'>
            {name}
          </button>
  )
}

export default CustomButton
