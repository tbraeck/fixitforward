'use client'

import { createContext, useContext, useState } from 'react';

// Create the context
const ZipCodeContext = createContext();

// Create a provider component
export const ZipCodeProvider = ({ children }) => {
  const [zipCode, setZipCode] = useState('');

  return (
    <ZipCodeContext.Provider value={{ zipCode, setZipCode }}>
      {children}
    </ZipCodeContext.Provider>
  );
};

// Custom hook for consuming context
export const useZipCode = () => {
  const context = useContext(ZipCodeContext);
  if (!context) {
    throw new Error('useZipCode must be used within a ZipCodeProvider');
  }
  return context;
};
