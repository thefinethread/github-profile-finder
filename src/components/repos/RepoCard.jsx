import { RiStarFill, RiGitBranchFill } from 'react-icons/ri';
import { formatNumberWithSuffix } from '../../utils/utils';

const RepoCard = ({ repo }) => {
  const {
    name,
    description,
    visibility,
    html_url,
    stargazers_count,
    forks,
    language,
  } = repo;

  const languageColors = {
    HTML: '#e05e02',
    JavaScript: '#e0e002',
    CSS: '#054fbe',
  };

  const languageStyles = {
    backgroundColor: languageColors[language],
  };

  return (
    <div className="repo-card flex text-sm flex-cl">
      <div className="width-100">
        <div className="flex width-100 gap-10 mb-10">
          <a href={html_url}>
            <p className="color-accent">{name}</p>
          </a>
          {visibility === 'public' && (
            <span className="public-repo text-sm-2 text-dim">Public</span>
          )}
        </div>
        <p className="width-100 text-dim text-sm-2">{description}</p>
      </div>
      <div className="flex justify-start gap-10 width-100 text-sm-2 text-dim">
        {language && (
          <div className="flex gap-5">
            <span style={languageStyles} className="language-circle"></span>
            <p>{language}</p>
          </div>
        )}
        <div className="flex gap-5 repo-stat stars">
          <RiStarFill />
          <span>{formatNumberWithSuffix(stargazers_count)}</span>
        </div>
        <div className="flex gap-5 repo-stat forks">
          <RiGitBranchFill />
          <span>{formatNumberWithSuffix(forks)}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
