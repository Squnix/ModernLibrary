import { cookies } from "next/headers";
import { themeValues, themesList } from "@/types/themeValues";

export default function getThemeOnServer(): themeValues | undefined {
  const theme = cookies().get("theme");
  if (!theme) return undefined;
  const foundTheme = Object.keys(themesList).find((themeValue) => themeValue === theme.value);
  if(!foundTheme) return undefined;
  return foundTheme as themeValues;
}
