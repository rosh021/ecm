import React, { createContext, useContext, useReducer } from "react";

// prepares the data Layer
export const stateContext = createContext();

// wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);

export const useStateValue = () => useContext(stateContext);
