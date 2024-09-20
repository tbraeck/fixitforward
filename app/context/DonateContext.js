'use client'

import { createContext, useContext, useState } from 'react';

// Create the context
const DonateContext = createContext();

// Create a provider component
export const DonateProvider = ({ children }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [product, setProduct] = useState("");
    const [brand, setBrand] = useState("");
    const [howBroken, setHowBroken] = useState("");

  return (
    <DonateContext.Provider value={{ firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber, product, setProduct, brand, setBrand, howBroken, setHowBroken }}>
      {children}
    </DonateContext.Provider>
  );
};

// Custom hook for consuming context
export const useDonate = () => {
  const context = useContext(DonateContext);
  if (!context) {
    throw new Error('useDonate must be used within a DateAndTimeProvider');
  }
  return context;
};
