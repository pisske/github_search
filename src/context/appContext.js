import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

import { GET_USERS, SHOW_ERROR } from "./action";
const initialState = {
  user: "",
  repos: "",
  followers: "",
  loading: false,
  error: { show: false, msg: "" },
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchUsers = axios.create({
    baseUrl: `https://api.github.com`,
  });

  const getUsers = async () => {
    try {
      const { data } = await fetchUsers("/");
      console.log(data);
      dispatch({
        type: GET_USERS,
        payload: { users: data },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
