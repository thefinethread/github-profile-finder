const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

// search users
const searchUsers = async (input) => {
  const res = await fetch(`${GITHUB_URL}/search/users?q=${input} type:user`);
  const { items } = await res.json();

  return items;
};

// get a single user
const getUser = async (login) => {
  const res = await fetch(`${GITHUB_URL}/users/${login}`);

  if (res.status === 404) {
    window.location = '/not-found';
  }
  const data = await res.json();

  return data;
};

// get user repos
const getRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });

  const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);
  const data = await res.json();

  return data;
};

// fetchUsers() for testing purpose only
const fetchUsers = async () => {
  const res = await fetch(`${GITHUB_URL}/users`);
  const data = await res.json();

  return data;
};

export { searchUsers, getRepos, getUser };
