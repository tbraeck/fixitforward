'use client'; // Add 'use client' directive at the top of your file if using Next.js app directory

import { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const DonorContext = createContext();

// Create a provider component
export const DonorProvider = ({ children }) => {
  const [allDonors, setAllDonors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/donors")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to fetch donors');
        }
      })
      .then((data) => {
        setAllDonors(data);
      })
      .catch((error) => {
        console.error('Error fetching donors:', error);
      });
  }, []); // Ensure this only runs once when the component mounts

  return (
    <DonorContext.Provider value={{ allDonors, setAllDonors }}>
      {children}
    </DonorContext.Provider>
  );
};

// Custom hook for consuming context
export const useDonors = () => {
  const context = useContext(DonorContext);
  if (!context) {
    throw new Error('useDonors must be used within a DonorProvider');
  }
  return context;
};
