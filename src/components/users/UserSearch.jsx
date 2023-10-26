import { useState } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';

const UserSearch = () => {
  const [text, setText] = useState('');

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      alert('Please enter username');
    }
  };

  return (
    <div className="search-container">
      <div>
        <form className="flex" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              placeholder="search username..."
              value={text}
              onChange={handleInput}
            />{' '}
            {text.length > 0 && (
              <button type="button" className="clear-input-btn">
                <RiCloseCircleFill size="1.4rem" />
              </button>
            )}
          </div>
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSearch;
