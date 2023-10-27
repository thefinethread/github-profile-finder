import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
  const initialState = {
    message: '',
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const showAlert = (message) => {
    dispatch({
      type: 'ERROR',
      payload: {
        message,
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
        message: state.message,
        showAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
