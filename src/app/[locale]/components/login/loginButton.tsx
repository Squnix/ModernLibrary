"use client";
import { signIn } from "next-auth/react";

export default function LoginButton({provider}: {provider: string}) {
  return (
    <button
      onClick={() => {
        signIn(provider, {callbackUrl: "/"});
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Log in with {provider}
    </button>
  );
}
