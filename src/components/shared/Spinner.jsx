import spinner from '../assets/spinner.gif';

const Spinner = () => {
  return (
    <div style={{ justifyContent: 'center' }} className="flex">
      <img style={{ width: '4rem' }} src={spinner} alt="loading..." />
    </div>
  );
};

export default Spinner;
