'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

const Success = () => {
  const router = useRouter(); 
  const [queryData, setQueryData] = useState(null);

  useEffect(() => {
    // Access the query data once it's available
    if (router.query) {
      setQueryData(router.query);
    }
  }, [router.query]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('you are going forward');
    router.push('/'); // Navigate to the home page
  }

  const handleBack = (e) => { 
    e.preventDefault(); 
    console.log('you are going back');
    router.push('/choose-shop'); // Navigate back to the shop selection page
  }

  if (!queryData) {
    return <p>Loading summary...</p>;
  }

  return (
    <div className='form-page'>
      <div className="App">
        <h1>Congratulations!</h1>
        <h2>You are all set to make your donation.</h2>
        <div>
          <h2>Summary of Your Information</h2>
          <p><strong>Date:</strong> {queryData.date}</p>
          <p><strong>Time:</strong> {queryData.time}</p>
          <h3>Drop-Off Location Details</h3>
          <p><strong>Company Name:</strong> {queryData.locationName}</p>
          <p><strong>Address:</strong> {queryData.address}</p>
          <p><strong>Zip Code:</strong> {queryData.zipCode}</p>
          <p><strong>Phone Number:</strong> {queryData.phoneNumber}</p>
          <p><strong>Email:</strong> {queryData.email}</p>
        </div>
        <div className="flex flex-row">
          <button className='back-button' onClick={handleBack}>
            BACK
          </button>
          <button className='reset-submit-button' onClick={handleSubmit}>
            ALL DONE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
