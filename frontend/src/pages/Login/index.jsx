import React, { useEffect } from 'react'
import LoginHeading from '../../components/login_signup/CustomHeading'
import CustomInput from '../../components/common/inputs/CustomInput'
import { Link } from 'react-router-dom'
import CustomButton from '../../components/common/inputs/CustomButton'
import { useDispatch } from 'react-redux'
import { resetState, setEmail, setPassword } from '../../store/user/UserSlice'

function Login() {
  const dispatch = useDispatch();

  const onChangeEmail=(email)=>{
    dispatch(setEmail(email));
  }
  const onChangePassword=(password)=>{
    dispatch(setPassword(password));
  }

  useEffect(()=>{
    dispatch(resetState());
  },[])

  return (
    <div className='flex justify-center items-center bg-[var(--secondary-color)] w-full h-screen'>
      <div className='flex flex-col gap-5 items-center bg-[var(--background-color)] border-1 rounded-2xl min-w-100 min-h-120 '>
        <LoginHeading heading={"Login"}/>

        <div className='flex flex-col justify-center items-center gap-2 w-full h-full'>
            <CustomInput 
              text="Email" 
              id="email" 
              placeholder=""
              onChange={(e)=>onChangeEmail(e.target.value)}
            />
            <CustomInput 
              text="Password" 
              id="password" 
              placeholder=""
              onChange={(e)=>onChangePassword(e.target.value)}  
            />

          <div className='flex justify-center items-center border-b-2 mt-3 pb-5 w-4/5 '>
            <Link to={"/signup"}>
              <p className='text-[var(--primary-color)] w-full'>Don't have an account? Sign Up</p>
            </Link>
          </div>
        </div>

        <div className='flex justify-center pb-10 w-full'>
          <CustomButton name="Login"/>
        </div>
        
      </div>
    </div>
  )
}

export default Login
