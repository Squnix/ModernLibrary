import SignInOutButton from "./signInOutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function SessionStatus(): Promise<React.ReactElement> {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex flex-row">
      {session?.user && <p className="mr-2">{session.user.name}</p>}
      <SignInOutButton type={session ? "SignOut" : "SignIn"} />
    </div>
  );
}
