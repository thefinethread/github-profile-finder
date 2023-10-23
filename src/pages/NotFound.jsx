import { Link } from 'react-router-dom';
import { RiHome5Line } from 'react-icons/ri';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="main-container flex">
        <h1>Oops!</h1>
        <h3>404 - Page not found!</h3>
        <Link to="/" className="btn btn-primary flex">
          <RiHome5Line />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
