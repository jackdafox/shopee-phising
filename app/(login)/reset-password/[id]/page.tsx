import prisma from "@/app/prisma";
import ResetPasswordPage from "@/components/ResetPasswordPage";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {

  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    return <div>User not found</div>;
  }
  return <ResetPasswordPage user={user} />;
};

export default page;
