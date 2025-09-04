import React from 'react'
import LoginHeading from '../../components/login_signup/CustomHeading'
import CustomInput from '../../components/common/inputs/CustomInput'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='flex justify-center items-center bg-[var(--secondary-color)] w-full h-screen'>
      <div className='flex flex-col justify-between items-center bg-[var(--background-color)] border-1 rounded-2xl min-w-100 min-h-120 '>
        <LoginHeading heading={"Login"}/>

        <div className='flex flex-col justify-center border-1'>
            <CustomInput text="Email" id="email" placeholder=""/>
            <CustomInput text="Password" id="password" placeholder=""/>

          <div className='flex justify-center items-center border-b-1 w-4/5 h-10 '>
            <Link to={"/signup"}>
              <p className='text-[var(--primary-color)] border-1 w-full'>Don't have an account? Sign Up</p>
            </Link>
          </div>
        </div>

        <div className='w-full'>
          <button className='bg-[var(--primary-color)] text-[var(--background-color)] text-xl font-bold  w-2/5 h-12 rounded-lg'>
            Login
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Login
