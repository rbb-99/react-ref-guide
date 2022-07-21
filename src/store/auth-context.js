import React from "react";

//AuthContext is not a component but it is an object that'll contain a component
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
