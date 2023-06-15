import { getProviders } from "next-auth/react";
import LoginButton from "./loginButton";
import Link from "next/link";

export default async function LoginComponent(): Promise<React.ReactElement> {
  const providers = await getProviders();
  return (
    <div>
      {providers &&
        Object.values(providers).map((provider) => {
          return (
            <div key={provider.id}>
              <LoginButton provider={provider.id} />
            </div>
          );
        })}
      <Link href="/register">Register</Link>
    </div>
  );
}
