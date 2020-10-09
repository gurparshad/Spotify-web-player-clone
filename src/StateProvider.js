import React, { createContext, useContext, useReducer } from "react";

export const StateProviderContext = createContext();

// children is the App component.
export const StateProvider = ({ initialState, reducer, children }) => (
  <StateProviderContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateProviderContext.Provider>
);

export const useStateProviderValue = () => useContext(StateProviderContext);
