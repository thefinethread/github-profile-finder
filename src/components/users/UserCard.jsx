import { Link } from 'react-router-dom';

const UserCard = ({ user: { login, avatar_url } }) => {
  return (
    <div className="user-card flex">
      <img src={avatar_url} alt="profile" />
      <div className="user-info flex">
        <p>{login}</p>
        <Link to={`/users/${login}`}>Visit Profile</Link>
      </div>
    </div>
  );
};

export default UserCard;
