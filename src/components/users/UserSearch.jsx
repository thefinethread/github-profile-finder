import { RiCloseCircleFill } from 'react-icons/ri';

const UserSearch = () => {
  return (
    <div className="search-container">
      <div>
        <form className="flex">
          <div className="form-control">
            <input type="text" placeholder="search username..." />
            <button className="clear-input-btn">
              <RiCloseCircleFill size="1.4rem" />
            </button>
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
