import { createContext, useContext, useState } from "react";

const BakeryContext = createContext();

export const useBakery = () => useContext(BakeryContext);

export const BakeryProvider = ({ children }) => {
  const [selections, setSelections] = useState({});
  return (
    <BakeryContext.Provider value={{ selections, setSelections }}>
      {children}
    </BakeryContext.Provider>
  );
};
