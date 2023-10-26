import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const GithubContext = createContext();

export const GithubContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // fetchUsers() for testing purpose only
  const fetchUsers = async () => {
    dispatch({
      type: 'SET_LOADING',
    });

    const res = await fetch(GITHUB_URL);
    const data = await res.json();

    dispatch({
      type: 'SET_USERS',
      payload: {
        users: data,
      },
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
