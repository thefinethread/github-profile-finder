import { useState, useContext } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';
import GithubContext from '../../contexts/github/GithubContext';
import AlertContext from '../../contexts/alerts/AlertContext';
import Alert from '../shared/Alert';

const UserSearch = () => {
  const [text, setText] = useState('');

  const { searchUsers } = useContext(GithubContext);

  const { showAlert } = useContext(AlertContext);

  const handleInput = (e) => setText(e.target.value);

  const clearInput = () => setText('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      showAlert('Please enter username', 'error');
      return;
    }
    searchUsers(text);
    setText('');
  };

  return (
    <div className="search-container">
      <form className="flex" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="search username..."
            value={text}
            onChange={handleInput}
          />
          {text.length > 0 && (
            <button
              onClick={clearInput}
              type="button"
              className="clear-input-btn"
            >
              <RiCloseCircleFill size="1.4rem" />
            </button>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
      <Alert />
    </div>
  );
};

export default UserSearch;
