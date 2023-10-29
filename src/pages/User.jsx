import { useParams } from 'react-router-dom';

const User = () => {
  const params = useParams();

  return <div>{params.login}</div>;
};

export default User;
