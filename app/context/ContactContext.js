'use client'

import { createContext, useContext, useState } from 'react';

// Create the context
const ContactContext = createContext();

// Create a provider component
export const ContactProvider = ({ children }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
   const [message, setMessage] = useState("");

  return (
    <ContactContext.Provider value={{ firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber, message, setMessage }}>
      {children}
    </ContactContext.Provider>
  );
};

// Custom hook for consuming context
export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContext must be used within a ContactProvider');
  }
  return context;
};
