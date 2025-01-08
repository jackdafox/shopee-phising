import prisma from "@/app/prisma";
import ResetPasswordPage from "@/components/ResetPasswordPage";
import React from "react";

async function page({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: {
      id
    },
  });

  if (!user) {
    return <div>User not found</div>;
  }
  return <ResetPasswordPage user={user} />;
};

export default page;
