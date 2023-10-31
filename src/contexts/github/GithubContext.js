import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const GithubContext = createContext();

export const GithubContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
    user: null,
    repos: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  // get a single user
  const getUser = async (login) => {
    setLoading();

    const res = await fetch(`${GITHUB_URL}/users/${login}`);

    if (res.status === 404) {
      window.location = '/not-found';
    }
    const data = await res.json();

    dispatch({
      type: 'GET_USER',
      payload: {
        user: data,
      },
    });
  };

  // get user repos
  const getRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    });

    const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);
    const data = await res.json();

    dispatch({
      type: 'GET_REPOS',
      payload: {
        repos: data,
      },
    });
  };

  // search users
  const searchUsers = async (input) => {
    setLoading();

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
    setLoading();

    const res = await fetch(`${GITHUB_URL}/users`);
    const data = await res.json();

    dispatch({
      type: 'GET_USERS',
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
        user: state.user,
        searchUsers,
        getUser,
        getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
