import { useEffect, useContext } from 'react';
import GithubContext from '../../contexts/github/GithubContext';
import Spinner from '../shared/Spinner';
import UserCard from './UserCard';

const UserResults = () => {
  const { users, isLoading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    // fetchUsers();
  }, []);

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
