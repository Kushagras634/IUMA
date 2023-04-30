import React from "react";

export default (state, action) => {
  switch (action.type) {
    case "LOGIN":
        console.log(action)
      return {
        token: action.payload.token,
        email: action.payload.email,
        profession: action.payload.profession,
        name: action.payload.name,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        token: null,
        email: null,
        profession: null,
        name:null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
