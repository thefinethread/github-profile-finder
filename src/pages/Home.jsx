import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';

const Home = () => {
  return (
    <div className="main-container">
      <UserSearch />
      <UserResults />
    </div>
  );
};

export default Home;
