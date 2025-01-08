import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full p-5 text-zinc-400 text-[0.75rem] fixed bottom-0">
      <p>This site is protected by reCAPTCHA and the Google</p>
      <h1>
      <Link
        href="https://policies.google.com/privacy"
        className="underline hover:text-[#1ed760]"
      >
        Privacy Policy
      </Link>{" "}
      and{" "}
      <Link
        href="https://policies.google.com/terms"
        className="underline hover:text-[#1ed760]"
      >
        Terms of Service apply.
      </Link>
      </h1>
    </footer>
  );
};

export default Footer;
