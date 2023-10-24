import { useState, useEffect } from 'react';

import UserCard from './UserCard';

const UserResults = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(process.env.REACT_APP_GITHUB_URL);
    const data = await res.json();
    setUsers(data);
  };

  return (
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
