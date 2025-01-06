import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/reset-password")
  return (
    <div>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}
