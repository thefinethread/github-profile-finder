import { useContext } from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import AlertContext from '../../contexts/alerts/AlertContext';

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className="alert-container flex justify-start gap-5">
        {alert.alertType === 'error' && (
          <RiErrorWarningFill size="1rem" color="#ff6400" />
        )}
        <p>{alert.message}</p>
      </div>
    )
  );
};

export default Alert;
