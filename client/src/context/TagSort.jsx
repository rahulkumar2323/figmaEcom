import { createContext, useState } from "react";

export const TagSortContext = createContext();

export const TagSortProvider = ({ children }) => {
  const [tag, setTag] = useState("");

  return (
    <TagSortContext.Provider value={{ tag, setTag }}>
      {children}
    </TagSortContext.Provider>
  );
};
