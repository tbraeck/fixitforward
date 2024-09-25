'use client';

import { createContext, useContext, useState } from 'react';

// Create the context
const DateAndTimeRepairContext = createContext();

// Create a provider component
export const DateAndTimeRepairProvider = ({ children }) => {
  const [date, setDate] = useState(null); // Set initial date as null or a specific date
  const [time, setTime] = useState({
    monday: { fromHour: '9', fromMinute: ':00', fromPeriod: 'AM', toHour: '5', toMinute: ':00', toPeriod: 'PM', closed: false },
    tuesday: { fromHour: '9', fromMinute: ':00', fromPeriod: 'AM', toHour: '5', toMinute: ':00', toPeriod: 'PM', closed: false },
    wednesday: { fromHour: '9', fromMinute: ':00', fromPeriod: 'AM', toHour: '5', toMinute: ':00', toPeriod: 'PM', closed: false },
    thursday: { fromHour: '9', fromMinute: ':00', fromPeriod: 'AM', toHour: '5', toMinute: ':00', toPeriod: 'PM', closed: false },
    friday: { fromHour: '9', fromMinute: ':00', fromPeriod: 'AM', toHour: '5', toMinute: ':00', toPeriod: 'PM', closed: false },
    saturday: { fromHour: '9', fromMinute: ':00', fromPeriod: 'AM', toHour: '5', toMinute: ':00', toPeriod: 'PM', closed: false },
    sunday: { fromHour: '9', fromMinute: ':00', fromPeriod: 'AM', toHour: '5', toMinute: ':00', toPeriod: 'PM', closed: false }
  });

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
