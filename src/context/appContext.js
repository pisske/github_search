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
    baseURL: `https://api.github.com`,
    headers: {
      authorization: `Bearer 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`,
    },
  });

  const getUsers = async () => {
    try {
      const { data } = await fetchUsers("/search/users?q=vladimir");
      console.log(data);
      dispatch({
        type: GET_USERS,
        payload: { user: data },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
