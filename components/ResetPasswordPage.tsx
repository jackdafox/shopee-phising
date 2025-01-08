"use client";
import React from "react";
import ResetPasswordForm from "./ResetPasswordForm";
import ShopeeSvg from "./svg/shopeesvg";
import { User } from "@prisma/client";

const ResetPasswordPage = ({ user }: { user: User }) => {
  return (
    <div className="flex justify-center items-center p-4 sm:p-10">
      <div className="flex flex-col justify-center items-center text-white w-full sm:w-96 gap-3 px-4 sm:px-0">
      <ShopeeSvg />
      <h1 className="font-bold text-2xl sm:text-4xl tracking-tight mt-6 text-center">
        Create new password
      </h1>
      <p className="text-center sm:text-start px-2 sm:px-5 text-sm sm:text-base">
        Please enter your new password below for your Spotify account.
      </p>

      <ResetPasswordForm userID={user.id} />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
