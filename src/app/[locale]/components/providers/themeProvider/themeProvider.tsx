"use client"

import { createContext, useState } from "react";
import { type themeValues, themesList } from '@/types/themeValues';

type themeContextType = { value: themeValues, setTheme: (theme: themeValues) => void };

export const themeContext = createContext<themeContextType>({ value: "light", setTheme: () => { } });

const setThemeCookie = (theme: themeValues) => {
    document.cookie = `theme=${theme}`;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeCookie = document?.cookie.split(";").find((coockie) => {
    const name = coockie.split("=")[0].trim();
    if (name === "theme") {
      return true;
    }
  });
  const themeValue = themeCookie ? themeCookie.split("=")[1] : themesList.light;
  let currentTheme: themeValues;
  if (!themesList[themeValue as themeValues]) {
    currentTheme = themesList.light;
    setThemeCookie(currentTheme);
  } else {
    currentTheme = themeValue as themeValues
  }
  const [themeState, setThemeState] = useState<themeValues>(currentTheme);
  function setTheme(theme: themeValues) {
    setThemeCookie(theme);
    setThemeState(theme);
  }
  return (
    <themeContext.Provider value={{ value: themeState, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}
