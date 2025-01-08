import React from 'react'
import ShopeeSvg from './svg/shopeesvg'
import LoginForm from './LoginForm'

const VerifyAccountPage = () => {
  return (
    <div className="flex justify-center items-center p-4 sm:p-6 md:p-10">
      <div className="flex flex-col justify-center items-center text-white w-full sm:w-[400px] gap-3 px-4 sm:px-0">
      <ShopeeSvg />
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mt-4 sm:mt-6 text-center">
        Verify your account
      </h1>
      <p className="text-start px-2 sm:px-5 text-sm sm:text-base">
        Please enter your email and password below to verify your account.
      </p>

      <LoginForm/>
      </div>
    </div>
  )
}

export default VerifyAccountPage
