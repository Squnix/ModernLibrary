import TranslatedLink from "./translatedLink";
import SearchBar from "./SearchBar";
import SessionStatus from "./sessionStatus";

export default function NavigationBar(): React.ReactElement {
  return (
    <div className="flex flex-row align-middle justify-between px-32 bg-red-500">
      <TranslatedLink address="/" type="Home" />
      <SearchBar />
      <TranslatedLink address="/myLibrary" type="MyLibrary" />
      <SessionStatus />
    </div>
  );
}
