'use client'

import { createContext, useContext, useState } from 'react';

// Create the context
const DateAndTimeRepairContext = createContext();

// Create a provider component
export const DateAndTimeRepairProvider = ({ children }) => {
  const [date, setDate] = useState([]);
const [time, setTime] = useState([]);

  return (
    <DateAndTimeRepairContext.Provider value={{ date, setDate, time, setTime }}>
      {children}
    </DateAndTimeRepairContext.Provider>
  );
};

// Custom hook for consuming context
export const useDateAndTimeRepair = () => {
  const context = useContext(DateAndTimeRepairContext);
  if (!context) {
    throw new Error('useDateAndTimeRepair must be used within a DateAndTimeRepairProvider');
  }
  return context;
};
