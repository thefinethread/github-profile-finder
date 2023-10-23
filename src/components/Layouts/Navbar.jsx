import { Link, NavLink } from 'react-router-dom';
import { RiGithubFill } from 'react-icons/ri';

const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex">
          <Link to="/" className="flex">
            <RiGithubFill fontSize="2rem" />
            <div className="title">{title}</div>
          </Link>

          <ul className="flex">
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
