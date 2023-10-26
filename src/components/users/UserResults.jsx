import { useContext } from 'react';
import GithubContext from '../../contexts/github/GithubContext';
import Spinner from '../shared/Spinner';
import UserCard from './UserCard';

const UserResults = () => {
  const { users, isLoading } = useContext(GithubContext);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {/*@Todo- create search component*/}
      <div className="user-results">
        {users.map((user) => (
          <UserCard key={user.id} user={user}></UserCard>
        ))}
      </div>
    </>
  );
};

export default UserResults;
