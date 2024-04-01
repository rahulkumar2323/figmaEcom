import { createContext, useState } from "react";

export const SearchTextContext = createContext();

export const SearchTextProvider = ({ children }) => {
  const [searchTextSubmit, setSearchTextSubmit] = useState("");

  return (
    <SearchTextContext.Provider
      value={{ searchTextSubmit, setSearchTextSubmit }}
    >
      {children}
    </SearchTextContext.Provider>
  );
};
