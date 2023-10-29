import { useContext } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import AlertContext from '../../contexts/alerts/AlertContext';

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div
        className="alert-container flex"
        style={{
          justifyContent: 'start',
          gap: '4px',
        }}
      >
        {alert.alertType === 'error' && (
          <RiErrorWarningLine size="1rem" color="#ff6400" />
        )}
        <p>{alert.message}</p>
      </div>
    )
  );
};

export default Alert;
