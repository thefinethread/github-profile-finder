import { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  RiGroupLine,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
  RiTwitterXFill,
} from 'react-icons/ri';
import GithubContext from '../contexts/github/GithubContext';
import Spinner from '../components/shared/Spinner';

const User = () => {
  const { user, getUser, isLoading } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  const roundOffConnections = (num) => {
    return num < 1000 ? num : (num / 1000).toFixed(1) + 'k';
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (user !== null) {
    const {
      name,
      login,
      avatar_url,
      html_url,
      type,
      hireable,
      bio,
      followers,
      following,
      followers_url,
      following_url,
      location,
      blog,
      twitter_username,
      email,
    } = user;

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
                <img src={avatar_url} alt="profile pic" />
              </div>
              <div className="user-name">
                <h2>{name}</h2>
                <p className="text-dim">{login}</p>
              </div>
              <div className="user-tags flex text-sm-2">
                <span>{type}</span>
                <span>{hireable && 'Hireable'}</span>
              </div>
              <a
                className="width-100-prct"
                href={html_url}
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-secondary width-100-prct">
                  Visit Github Profile
                </button>
              </a>
              <div className="bio">{bio}</div>
              <div className=" flex text-sm flex-gap-5">
                <a
                  href={following_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-gap-5"
                >
                  <RiGroupLine className="text-dim" />
                  <span>{roundOffConnections(followers)}</span>
                  <span className="text-dim"> followers</span>
                </a>
                <span style={{ fontSize: '5px' }}>&#x2022;</span>
                <a
                  href={followers_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-gap-5"
                >
                  <span>{roundOffConnections(following)}</span>
                  <span className="text-dim">followers</span>
                </a>
              </div>
              <div>
                {location && (
                  <div className="flex flex-jus-ct-strt flex-gap-5">
                    <RiMapPin2Line className="text-dim" />
                    <span className="text-sm">{location}</span>
                  </div>
                )}

                {email && (
                  <div className="flex flex-jus-ct-strt flex-gap-5">
                    <RiMailLine className="text-dim" />
                    <span className="text-sm">{email}</span>
                  </div>
                )}

                {blog && (
                  <div className="flex flex-jus-ct-strt flex-gap-5">
                    <RiLinksLine className="text-dim" />
                    <a href={`https://${blog}`}>
                      <span className=" text-sm">{blog}</span>
                    </a>
                  </div>
                )}

                {twitter_username && (
                  <div className="flex flex-jus-ct-strt flex-gap-5">
                    <RiTwitterXFill className="text-dim" />
                    <a href={`https://twitter.com/${twitter_username}`}>
                      <span className=" text-sm">@{twitter_username}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="right-section">repos</div>
          </div>
        )}
      </div>
    );
  }
};

export default User;
