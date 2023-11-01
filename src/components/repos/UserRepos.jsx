import RepoCard from './RepoCard';

const UserRepos = ({ repos }) => {
  return (
    <>
      <p>Latest Repositories</p>
      <div className="repos-container">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </>
  );
};

export default UserRepos;
