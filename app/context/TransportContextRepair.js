'use client'

import { createContext, useContext, useState } from 'react';

// Create the context
const TransportRepairContext = createContext();

// Create a provider component
export const TransportRepairProvider = ({ children }) => {
    const [transport, setTransport] = useState([]);

  return (
    <TransportRepairContext.Provider value={{ transport, setTransport }}>
      {children}
    </TransportRepairContext.Provider>
  );
};

// Custom hook for consuming context
export const useTransportRepair = () => {
  const context = useContext(TransportRepairContext);
  if (!context) {
    throw new Error('useTransportRepair must be used within a TransportRepairProvider');
  }
  return context;
};
