import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../contexts/github/GithubContext';

const User = () => {
  const { user, getUser } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>{params.login}</div>;
};

export default User;
