'use client'

import { createContext, useContext, useState } from 'react';

// Create the context
const DateAndTimeContext = createContext();

// Create a provider component
export const DateAndTimeProvider = ({ children }) => {
  const [date, setDate] = useState('');
const [time, setTime] = useState('');

  return (
    <DateAndTimeContext.Provider value={{ date, setDate, time, setTime }}>
      {children}
    </DateAndTimeContext.Provider>
  );
};

// Custom hook for consuming context
export const useDateAndTime = () => {
  const context = useContext(DateAndTimeContext);
  if (!context) {
    throw new Error('useDateAndTime must be used within a DateAndTimeProvider');
  }
  return context;
};
