import React, { createContext, useContext, useReducer } from "react";

import items from "@/lib/constants/items";

const DemoContext = createContext();

const initialState = {
  appearance: "light",
  accentColor: "indigo",
  manifest: items[0].id,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACCENT_COLOR":
      return { ...state, accentColor: action.payload };
    case "SET_APPEARANCE":
      return { ...state, appearance: action.payload };
    case "SET_MANIFEST":
      return { ...state, manifest: action.payload };
    default:
      return state;
  }
};

export const DemoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DemoContext.Provider value={{ state, dispatch }}>
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = () => {
  const context = useContext(DemoContext);

  if (!context) {
    throw new Error("useDemo must be used within a DemoProvider");
  }

  return context;
};
