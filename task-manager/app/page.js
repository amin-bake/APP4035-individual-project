import { getServerSession } from "next-auth";
import { authOptions } from "./lib/nextAuth";
import {redirect} from 'next/navigation'
import Logout from "./components/logout";
import RootLayout from "./layout";

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session)
  
  if (!session) {
    redirect('/api/auth/signin') && null
  }

  return (
    <RootLayout>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">
        Welcome{" "}
        <a className="text-blue-600">
          {session.user.name}
        </a>
      </h1>
      <Logout/>
    </main>
    </RootLayout>
  );
}
