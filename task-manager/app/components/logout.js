'use client';
import { redirect } from "next/dist/server/api-utils";

export default function Logout(){
    const logoutBtn = ()=>{
        redirect('/api/auth/signout')
      }
    return(
        <div>
            <button onClick={logoutBtn} className={logoutBtn}>Logout</button>
        </div>
    )
}