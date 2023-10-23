import { RiGithubFill } from 'react-icons/ri';

const footerStyle = {
  fontSize: '2rem',
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex">
          <RiGithubFill style={footerStyle} />
          <div>Copyright &copy; All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
