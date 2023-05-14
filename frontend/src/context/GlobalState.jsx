
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  token: null,
  email: null,
  name: null,
  profession: null,
  isLoggedIn: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for changing state

  function loginUser(item) {
    dispatch({
      type: "LOGIN",
      payload: item,
    });
  }
  function logoutUser(item) {
    dispatch({
      type: "LOGOUT",
      payload: item,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        token: state.token,
        email: state.email,
        id: state.id,
        profession: state.profession,
        isLoggedIn: state.isLoggedIn,
        name: state.name,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
