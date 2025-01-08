import React from 'react'
import ShopeeSvg from './svg/shopeesvg'
import LoginForm from './LoginForm'

const VerifyAccountPage = () => {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="flex flex-col justify-center items-center text-white w-96 gap-3 max-w-full">
        <ShopeeSvg />
        <h1 className="font-bold text-4xl tracking-tight mt-6">
          Verify your account
        </h1>
        <p className="text-start px-5">
          Please enter your email and password below to verify your account.
        </p>

        <LoginForm/>
      </div>
    </div>
  )
}

export default VerifyAccountPage
