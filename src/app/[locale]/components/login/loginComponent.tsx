import { getProviders } from "next-auth/react";
import LoginButton from "./loginButton";
import RegisterButton from "./registerButton";
import LoginForm from './loginForm';

export default async function LoginComponent(): Promise<React.ReactElement> {
  const providers = await getProviders();
  return (
    <div>
      <LoginForm />
      {providers &&
        Object.values(providers).map((provider) => {
          if(provider.id === "credentials") {
            return null;
          }
          return (
            <div key={provider.id}>
              <LoginButton provider={provider.id} />
            </div>
          );
        })}
      <RegisterButton />
    </div>
  );
}
