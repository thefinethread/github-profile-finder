import { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import GithubContext from '../contexts/github/GithubContext';
import Spinner from '../components/shared/Spinner';

const User = () => {
  const { user, getUser, isLoading } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '10px' }}>
        <Link to="/">Back to search</Link>
      </div>
      <div className="divider"></div>
      {user !== null && (
        <div className="user-container flex">
          <div className="left-section flex">
            <div className="profile-pic-container">
              <img src={user.avatar_url} alt="profile pic" />
            </div>
            <div className="user-name">
              <h2>{user.name}</h2>
              <p className="text-dim">{user.login}</p>
            </div>
            <button type="button" className="btn btn-secondary">
              Visit Github Profile
            </button>
            <div className="bio"> {user.bio}</div>
          </div>
          <div className="right-section">repos</div>
        </div>
      )}
    </div>
  );
};

export default User;
