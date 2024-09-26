'use client'
import { createContext, useContext, useState } from 'react';

const DateAndTimeRepairContext = createContext();

export const useDateAndTimeRepair = () => {
  return useContext(DateAndTimeRepairContext);
};

export const DateAndTimeRepairProvider = ({ children }) => {
  const [times, setTimes] = useState([
    { day: 'Monday', hours: '8:00am-4:00pm', closed: false },
    { day: 'Tuesday', hours: '8:00am-4:00pm', closed: false },
    { day: 'Wednesday', hours: '8:00am-4:00pm', closed: false },
    { day: 'Thursday', hours: '8:00am-4:00pm', closed: false },
    { day: 'Friday', hours: '8:00am-4:00pm', closed: false },
    { day: 'Saturday', hours: 'Closed', closed: true },
    { day: 'Sunday', hours: 'Closed', closed: true },
  ]);

  return (
    <DateAndTimeRepairContext.Provider value={{ times, setTimes }}>
      {children}
    </DateAndTimeRepairContext.Provider>
  );
};
