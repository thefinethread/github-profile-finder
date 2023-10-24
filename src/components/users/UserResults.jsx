import { useState, useEffect } from 'react';
import Spinner from '../shared/Spinner';

import UserCard from './UserCard';

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(process.env.REACT_APP_GITHUB_URL);
    const data = await res.json();
    setUsers(data);
    setIsLoading(false);
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {/*@Todo- create search component*/}
      <div className="user-results">
        {users.map((user, index) => {
          return <UserCard key={index} user={user}></UserCard>;
        })}
      </div>
    </>
  );
};

export default UserResults;
