import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateExpTime = (expirationTime) => {
  const currentTime = new Date().getTime(); //time in ms
  const adjustedExpTime = new Date(expirationTime).getTime();

  const remainingTime = adjustedExpTime - currentTime; //in ms, can be -ve when expired
  return remainingTime;
};

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  //if token is a string that's not empty, it'll return true
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    //local storage only stores strings and numbers
    localStorage.setItem("token", token);
    const remainingTime = calculateExpTime(expirationTime);
    setTimeout(logoutHandler, remainingTime);
  };

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
