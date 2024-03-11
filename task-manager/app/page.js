import { getServerSession } from "next-auth";
import { authOptions } from "./lib/nextAuth";
import {redirect, useNavigation} from 'next/navigation'
import Logout from "./components/logout";

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session)
  
  if (session === null) {
    redirect('/api/auth/signin')
    console.log(session)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">
        Welcome to{" "}
        <a className="text-blue-600" href="https://nextjs.org">
          Next.js!
        </a>
      </h1>
      {/* <Logout/> */}
    </main>
  );
}
