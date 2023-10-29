import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const showAlert = (message, alertType) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {
        message,
        alertType,
      },
    });

    setTimeout(() => {
      dispatch({
        type: 'REMOVE_ALERT',
      });
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        showAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
