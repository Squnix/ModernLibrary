'use client'
import {useSession} from 'next-auth/react';

export default function Home() {
  const {data: session, status, update} = useSession({required: true, onUnauthenticated() {
    console.log("User unauthenticated");
  }});
  console.dir(session);
  console.log(status);
  return (
  <div>
      <p>Hello {session ? session.user?.name : "Anonymouse"}</p>
      <button onClick={() => {update({name: "Łukasz"})}}>Update</button>
  </div>
  )
}
