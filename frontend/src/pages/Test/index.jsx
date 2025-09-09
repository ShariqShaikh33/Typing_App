import React from 'react'

function Test() {
  return (
    <div className='w-full h-screen pt-5 pb-5 bg-[var(--background-color)] flex flex-col justify-between items-center'>
      <div className='border-1 min-w-150 w-3/5 h-20 bg-[var(--secondary-color)] rounded-lg flex items-center justify-between'>
        <div className='w-80 flex justify-center items-center'>
            LOGO
        </div>
        <div className='border-1 h-4/5 rounded-2xl'>
        </div>
        <div className='w-full flex justify-center items-center'>
            <div className='w-full flex justify-evenly'>
                <div>
                    Word
                </div>
                <div>
                    Time
                </div>
            </div>
            <div className='border-1 h-10 rounded-2xl'>
            </div>
            <div className='w-full flex justify-evenly'>
                <div>
                    10
                </div>
                <div>
                    10
                </div>
                <div>
                    10
                </div>
            </div>

        </div>
        <div className='border-1 h-4/5 rounded-2xl'>
        </div>
        <div className='w-80 flex justify-center    '>
            User
        </div>
      </div>
      <div>
        Body
      </div>
      <div>
        Footer
      </div>
    </div>
  )
}

export default Test
