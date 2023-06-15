"use client";
import { signIn } from "next-auth/react";

export default function Register(): React.ReactElement {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: { [key: string]: string } = {};
        for (const [key, value] of formData) {
          console.log(key, value);
          data[key] = value;
        }
        signIn("credentials", { ...data, callbackUrl: "/" });
        return false;
      }}
      id="form"
      className="bg-yellow-200 flex flex-col"
    >
      <label>Username</label>
      <input type="text" id="name" name="name" />
      <label>Email</label>
      <input type="email" id="email" name="email" />
      <label>Password</label>
      <input type="password" name="password" />
      <input type="submit" />
    </form>
  );
}
