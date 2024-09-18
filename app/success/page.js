'use client';

import { useRouter } from "next/navigation";

// Function to add a prefix to the path with type-checking
const addPathPrefix = (path, prefix) => {
    console.log('path:', path);  // Log the value of path
    console.log('prefix:', prefix);  // Log the value of prefix
  
    // Check if the path is not a string
    if (typeof path !== 'string') {
      console.error(`Expected 'path' to be a string, but received ${typeof path}:`, path);
      throw new TypeError(`Expected 'path' to be a string, but received ${typeof path}`);
    }
  
    if (!path.startsWith(prefix)) {
      return `${prefix}${path}`;
    }
  
    return path;
  };
  

const Success = ({ details }) => {
  const router = useRouter();
  const { query } = router;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('you are going forward');

    // Example usage of addPathPrefix
    const nextPath = addPathPrefix('/', '/success');
    router.push(nextPath); 
  };

  const handleBack = (e) => {
    e.preventDefault();
    console.log('you are going back');

    // Example usage of addPathPrefix
    const previousPath = addPathPrefix('/choose-shop', '/');
    router.push(previousPath);
  };

  return (
    <div className='form-page'>
      <div className="App">
        <h1>Congratulations! </h1>
        <h2>You are all set to make your donation.</h2>
        <div>
          <h2>Summary of Your Information</h2>
          <p><strong>Date:</strong> {query.date}</p>
          <p><strong>Time:</strong> {query.time}</p>
          <h3>Drop-Off Location Details</h3>
          <p><strong>Company Name:</strong> {query.locationName}</p>
          <p><strong>Address:</strong> {query.address}</p>
          <p><strong>Zip Code:</strong> {query.zipCode}</p>
          <p><strong>Phone Number:</strong> {query.phoneNumber}</p>
          <p><strong>Email:</strong> {query.email}</p>
        </div>
        <div className="flex flex-row">
          <button className='back-button' onClick={handleBack}>
            BACK
          </button>
          <button
            className='reset-submit-button'
            type="submit"
            value="Submit"
            onClick={handleSubmit}
          >
            ALL DONE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
