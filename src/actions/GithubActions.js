const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

// search users
const searchUsers = async (input) => {
  const res = await fetch(`${GITHUB_URL}/search/users?q=${input} type:user`);
  const { items } = await res.json();

  return items;
};

export { searchUsers };
