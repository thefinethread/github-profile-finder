import { useState, useContext } from 'react';
import GithubContext from '../../contexts/github/GithubContext';
import AlertContext from '../../contexts/alerts/AlertContext';
import { searchUsers } from '../../actions/GithubActions';
import Alert from '../shared/Alert';

const UserSearch = () => {
  const [text, setText] = useState('');

  const { users, dispatch } = useContext(GithubContext);

  const { showAlert } = useContext(AlertContext);

  const handleInput = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      showAlert('Please enter username', 'error');
    } else {
      dispatch({ type: 'SET_LOADING' });

      const users = await searchUsers(text);
      dispatch({ type: 'SEARCH_USERS', payload: { users } });

      setText('');
    }
  };

  const clearSearchResults = () => {
    dispatch({ type: 'CLEAR_SEARCH_RESULTS' });
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      <div className="search-container flex justify-start width-100 gap-10">
        <form className="flex" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              placeholder="search username..."
              value={text}
              onChange={handleInput}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
        {users.length > 0 && (
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={clearSearchResults}
          >
            Clear
          </button>
        )}
      </div>
      <Alert />
    </div>
  );
};

export default UserSearch;
