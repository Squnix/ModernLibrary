"use client";
import { signIn } from "next-auth/react";

export default function Register(): React.ReactElement {
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
      className="bg-yellow-200 flex flex-col"
    >
      <label>Username</label>
      <input type="text" id="username" name="username" />
      <label>Email</label>
      <input type="email" id="email" name="email" />
      <label>Password</label>
      <input type="password" name="password" />
      <input type="submit" />
    </form>
  );
}
