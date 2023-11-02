import { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  RiGroupLine,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
  RiTwitterXFill,
  RiGitRepositoryFill,
  RiStore2Fill,
} from 'react-icons/ri';
import GithubContext from '../contexts/github/GithubContext';
import Spinner from '../components/shared/Spinner';
import UserRepos from '../components/repos/UserRepos';
import { formatNumberWithSuffix } from '../utils/utils';

const User = () => {
  const { user, repos, getUser, getRepos, isLoading } =
    useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    getRepos(params.login);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

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
    public_repos,
    public_gists,
  } = user;

  return (
    <div className="container">
      <div style={{ marginBottom: '10px' }}>
        <Link to="/">Back to search</Link>
      </div>
      <div className="divider"></div>
      {user !== null && (
        <div className="user-container flex gap-10">
          <div className="left-section flex">
            <div className="user-personal-info flex flex-cl  align-items-start gap-10">
              <div className="profile-pic-container">
                <img src={avatar_url} alt="profile pic" />
              </div>
              <div className="user-name">
                <h2>{name}</h2>
                <p className="text-dim">{login}</p>
              </div>
            </div>
            <div className="user-tags flex text-sm-2">
              <span>{type}</span>
              <span>{hireable && 'Hireable'}</span>
            </div>
            <a
              className="width-100"
              href={html_url}
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-secondary width-100">
                Visit Github Profile
              </button>
            </a>
            <div className="bio">{bio}</div>
            <div className=" flex text-sm gap-5">
              <a
                href={following_url}
                target="_blank"
                rel="noreferrer"
                className="flex gap-5"
              >
                <RiGroupLine className="text-dim" />
                <span>{formatNumberWithSuffix(followers)}</span>
                <span className="text-dim"> followers</span>
              </a>
              <span style={{ fontSize: '5px' }}>&#x2022;</span>
              <a
                href={followers_url}
                target="_blank"
                rel="noreferrer"
                className="flex gap-5"
              >
                <span>{formatNumberWithSuffix(following)}</span>
                <span className="text-dim">followers</span>
              </a>
            </div>
            <div>
              {location && (
                <div className="flex justify-start gap-5">
                  <RiMapPin2Line className="text-dim" />
                  <span className="text-sm">{location}</span>
                </div>
              )}

              {email && (
                <div className="flex justify-start gap-5">
                  <RiMailLine className="text-dim" />
                  <span className="text-sm">{email}</span>
                </div>
              )}

              {blog && (
                <div className="flex justify-start gap-5">
                  <RiLinksLine className="text-dim" />
                  <a href={`https://${blog}`}>
                    <span className=" text-sm">{blog}</span>
                  </a>
                </div>
              )}

              {twitter_username && (
                <div className="flex justify-start gap-5">
                  <RiTwitterXFill className="text-dim" />
                  <a href={`https://twitter.com/${twitter_username}`}>
                    <span className=" text-sm">@{twitter_username}</span>
                  </a>
                </div>
              )}
            </div>
            <div className="divider"></div>

            <div
              style={{ lineHeight: 'normal' }}
              className="flex gap-5 width-100"
            >
              <div className="flex width-100 justify-start gap-5">
                <div className="flex flex-cl">
                  <span className="text-sm-2 text-dim">Public Repos</span>
                  <span>{public_repos}</span>
                </div>
                <RiGitRepositoryFill size="1.8rem" className="text-dim" />
              </div>
              <div className="flex width-100 justify-start gap-5">
                <div className="flex flex-cl">
                  <span className="text-sm-2 text-dim">Public Gists</span>
                  <span>{public_gists}</span>
                </div>
                <RiStore2Fill size="1.8rem" className="text-dim" />
              </div>
            </div>
          </div>
          <div className="right-section">
            <UserRepos repos={repos} />
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
