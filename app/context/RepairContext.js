'use client'

import { createContext, useContext, useState } from 'react';

// Create the context
const RepairContext = createContext();

// Create a provider component
export const RepairProvider = ({ children }) => {
    const [companyName, setCompanyName] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [typeOfRepair, setTypeOfRepair] = useState("");

  return (
    <RepairContext.Provider value={{ companyName, setCompanyName, address, setAddress, email, setEmail, phoneNumber, setPhoneNumber, zipCode, setZipCode, typeOfRepair, setTypeOfRepair }}>
      {children}
    </RepairContext.Provider>
  );
};

// Custom hook for consuming context
export const useRepair = () => {
  const context = useContext(RepairContext);
  if (!context) {
    throw new Error('useRepair must be used within a RepairProvider');
  }
  return context;
};
