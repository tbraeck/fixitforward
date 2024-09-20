'use client'

import { createContext, useContext, useState } from 'react';

// Create the context
const TransportContext = createContext();

// Create a provider component
export const TransportProvider = ({ children }) => {
    const [transport, setTransport] = useState('');

  return (
    <TransportContext.Provider value={{ transport, setTransport }}>
      {children}
    </TransportContext.Provider>
  );
};

// Custom hook for consuming context
export const useTransport = () => {
  const context = useContext(TransportContext);
  if (!context) {
    throw new Error('useTransport must be used within a TransportProvider');
  }
  return context;
};
