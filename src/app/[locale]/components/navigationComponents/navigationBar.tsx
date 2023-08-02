import TranslatedLink from "./translatedLink";
import SearchBar from "./SearchBar";
import SessionStatus from "./sessionStatus";
import ThemeChangeComponent from './themeChange/themeChangeComponent';
import getThemeOnServer from "../customHooks/getThemeOnServer";

const themeColor = {
  "light": "bg-blue-300 text-black",
  "dark": "bg-black text-white",
  "orange": "bg-orange-300 text-black",
}

export default function NavigationBar(): React.ReactElement {
  const theme = getThemeOnServer();
  return (
    <div className={"flex flex-row align-middle justify-between px-32" + " " + themeColor[theme ?? "light"]}>
      <TranslatedLink address="/" type="Home" />
      <SearchBar />
      <TranslatedLink address="/myLibrary" type="MyLibrary" />
      <ThemeChangeComponent />
      {/*
        Zmiana języka
      */}
      <SessionStatus />
    </div>
  );
}
