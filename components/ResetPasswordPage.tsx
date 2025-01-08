"use client";
import React from "react";
import ResetPasswordForm from "./ResetPasswordForm";
import ShopeeSvg from "./svg/shopeesvg";
import { useSearchParams } from "next/navigation";

const ResetPasswordPage = () => {
  const searchParams = useSearchParams();

  const userID = searchParams.get("u") || "";
  return (
    <div className="flex justify-center items-center p-10">
      <div className="flex flex-col justify-center items-center text-white w-96 gap-3 max-w-full">
        <ShopeeSvg />
        <h1 className="font-bold text-4xl tracking-tight mt-6">
          Create new password
        </h1>
        <p className="text-start px-5">
          Please enter your new password below for your Spotify account.
        </p>

        <ResetPasswordForm userID={userID} />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
