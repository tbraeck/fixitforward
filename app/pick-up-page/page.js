'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Simulate fetching data from the data.json file
const fetchLocations = async () => {
    const res = await fetch('/data.json');
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const data = await res.json();
    console.log(data);
    return data;
  }
  

const PickUpPage = ({ zipCode }) => {
  const router = useRouter();
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [filteredLocations, setFilteredLocations] = useState([]);
  
  // Fetch data and filter it based on the zip code
  useEffect(() => {
    const getFilteredLocations = async () => {
      const data = await fetchLocations();
      console.log('Fetched data:', data); // Check if data is being fetched correctly

      if (data && zipCode) {
        // Filter locations based on the client's zip code (using first 3 digits)
        const nearbyLocations = data.filter(location => 
          location.zipCode.startsWith(zipCode.slice(0, 3))
        );

        console.log('Filtered nearby locations:', nearbyLocations);

        // Select top 5 locations
        setFilteredLocations(nearbyLocations.slice(0, 5));
      } else {
        console.error('Invalid data or zipCode:', { data, zipCode });
      }
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
              <div key={location.zip_code} className="location-container">
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

export default PickUpPage;
