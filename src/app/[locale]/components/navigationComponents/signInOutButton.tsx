"use client";
import { signIn, signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import type {SignInOutButtonType} from '../../../../types/NavigationBar/button';

export default function SignInOutButton({
  type,
}: {
  type: SignInOutButtonType;
}): React.ReactElement {
  const t = useTranslations("Navigation");
  return (
    <button
      onClick={() => {
        type === "SignIn" ? signIn() : signOut();
      }}
    >
      {t(type)}
    </button>
  );
}
