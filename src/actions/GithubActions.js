import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const github = axios.create({ baseURL: GITHUB_URL });

// search users
const searchUsers = async (input) => {
  const params = new URLSearchParams({
    q: input,
  });

  const res = await github.get(`/search/users?${params}`);
  return res.data.items;
};

// get a single user and its repo
const getUserAndRepos = async (login) => {
  const [userRes, reposRes] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return {
    user: userRes.data,
    repos: reposRes.data,
  };
};

// fetchUsers() for testing purpose only
const fetchUsers = async () => {
  const res = await github.get(`/users`);
  return res.data;
};

export { searchUsers, getUserAndRepos };
