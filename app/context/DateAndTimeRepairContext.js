'use client'
import { createContext, useContext, useState } from 'react';

const DateAndTimeRepairContext = createContext();

export const useDateAndTimeRepair = () => {
  return useContext(DateAndTimeRepairContext);
};

export const DateAndTimeRepairProvider = ({ children }) => {
  const [times, setTimes] = useState([
    { day: 'monday', hours: '7:00am-3:00pm', closed: false },
    { day: 'tuesday', hours: '8:00am-4:00pm', closed: false },
    { day: 'wednesday', hours: '9:00am-5:00pm', closed: false },
    { day: 'thursday', hours: '10:00am-6:00pm', closed: false },
    { day: 'friday', hours: '11:00am-7:00pm', closed: false },
    { day: 'saturday', hours: 'unknown', closed: false },
    { day: 'sunday', hours: 'unknown', closed: false },
  ]);

  return (
    <DateAndTimeRepairContext.Provider value={{ times, setTimes }}>
      {children}
    </DateAndTimeRepairContext.Provider>
  );
};
