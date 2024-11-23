import { createContext, useState, useContext } from 'react';

// Create the context
const AlertContext = createContext();

// Create the provider
const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ type: null, message: '' });

  const onOpen = (type, message) => {
    setAlert({ type, message });
  };

  const onClose = () => {
    setAlert({ type: null, message: '' });
  };

  return (
    <AlertContext.Provider value={{ alert, onOpen, onClose }}>
      {children}
    </AlertContext.Provider>
  );
};

// Custom hook to use the Alert context
const useAlertContext = () => {
  return useContext(AlertContext);
};

// Export the context and provider
export { AlertContext, AlertProvider, useAlertContext };
