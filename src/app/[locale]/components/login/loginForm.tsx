"use client"
import {signIn} from "next-auth/react"

export default function LoginForm(): React.ReactElement {
  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        const data: {
          [key: string]: string;
        } = {};
        const inputs = e.currentTarget.querySelectorAll("input");
        inputs.forEach((input) => {
          if(!input.name) return;
          data[input.name] = input.value;
        });
        signIn("credentials", { ...data, callbackUrl: "/" });
        return false;
      }}
      id="form"
      className="flex flex-col bg-yellow-200">
      <label>Username or Email</label>
      <input type="text" id="username" name="username" />
      <label>Password</label>
      <input type="password" name="password" />
      <input type="submit" value="Login" />
    </form>
  )
}
