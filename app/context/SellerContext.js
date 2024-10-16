'use client'; // Add 'use client' directive at the top of your file if using Next.js app directory

import { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const SellerContext = createContext();

// Create a provider component
export const SellerProvider = ({ children }) => {
  const [allSellers, setAllSellers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/sellers")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to fetch sellers');
        }
      })
      .then((data) => {
        setAllSellers(data);
      })
      .catch((error) => {
        console.error('Error fetching sellers:', error);
      });
  }, []); // Ensure this only runs once when the component mounts

  return (
    <SellerContext.Provider value={{ allSellers, setAllSellers }}>
      {children}
    </SellerContext.Provider>
  );
};

// Custom hook for consuming context
export const useSellers = () => {
  const context = useContext(SellerContext);
  if (!context) {
    throw new Error('useSellers must be used within a SellerProvider');
  }
  return context;
};
