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

  const searchUsers = async (input) => {
    dispatch({
      type: 'SET_LOADING',
    });

    const res = await fetch(`${GITHUB_URL}/search/users?q=${input} type:user`);
    const data = await res.json();

    dispatch({
      type: 'SEARCH_USERS',
      payload: {
        users: data.items,
      },
    });
  };

  // fetchUsers() for testing purpose only
  const fetchUsers = async () => {
    dispatch({
      type: 'SET_LOADING',
    });

    const res = await fetch(`${GITHUB_URL}/users`);
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
        searchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
