'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Simulate fetching data from the data.json file
const fetchLocations = async () => {
  const res = await fetch('/path/to/data.json'); // Replace with your actual JSON file path
  const data = await res.json();
  return data;
}

const DropOffPage = ({ zipCode }) => {
  const router = useRouter();
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [filteredLocations, setFilteredLocations] = useState([]);
  
  // Fetch data and filter it based on the zip code
  useEffect(() => {
    const getFilteredLocations = async () => {
      const data = await fetchLocations();

      // Filter locations based on the client's zip code (assuming nearby zip codes logic)
      const nearbyLocations = data.filter(location => 
        location.zipCode.startsWith(zipCode.slice(0, 3)) // Simplistic filtering by first 3 digits of zip
      );

      // Select top 5
      setFilteredLocations(nearbyLocations.slice(0, 5));
    };

    getFilteredLocations();
  }, [zipCode]);

  const handleNext = () => {
    console.log('Next button clicked');
    console.log('Selected location:', selectedLocation);
    // Proceed with the next logic
  };

  const handleBack = () => {
    router.push('/transport');
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h2>Select a Drop-Off Location</h2>
        {filteredLocations.length > 0 ? (
          <fieldset>
            {filteredLocations.map((location, index) => (
              <div key={location.zipCode} className="location-container">
                <input
                  type="radio"
                  id={location.zipCode}
                  name="location"
                  value={location.zipCode}
                  onChange={handleLocationChange}
                />
                <label htmlFor={location.zipCode}>
                  <strong>{index + 1}. {location.name}</strong><br />
                  {location.zipCode}<br />
                  {location.contactInfo}
                </label>
              </div>
            ))}
          </fieldset>
        ) : (
          <p>Loading nearby locations...</p>
        )}
        
        <div className="flex flex-row">
          <button className='back-button' onClick={handleBack}>
            BACK
          </button>
          <button
            className='reset-submit-button'
            type="button"
            disabled={!selectedLocation} // Disable Next button until a location is selected
            onClick={handleNext}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropOffPage;
