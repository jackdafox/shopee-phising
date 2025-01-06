import React from "react";
import ShopeeSvg from "./svg/shopeesvg";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-between shadow-md p-5 px-60 w-full">
        <div className="flex gap-5 items-center">
          <ShopeeSvg />
          <h1 className="text-xl w-full mt-2">Reset Password</h1>
        </div>
        <h1 className="text-[#EE4D2D] hover:underline cursor-pointer text-[0.75rem]">
          Need Help?
        </h1>
      </div>
      <div className="flex flex-col px-10 py-5 shadow-md bg-white w-[30rem] mt-24 gap-7">
        <h1 className="text-center text-xl">Set your password</h1>
        <ResetPasswordForm/>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
