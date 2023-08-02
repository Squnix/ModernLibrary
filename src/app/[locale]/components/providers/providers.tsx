"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ThemeProvider } from "./themeProvider/themeProvider";

type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ThemeProvider>
        <Provider store={store}>
          {children}
        </Provider>
      </ThemeProvider>
    </SessionProvider>
  );
};
