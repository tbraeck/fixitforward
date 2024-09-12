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

 
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, lastName, email, phoneNumber, product, brand, howBroken);
    router.push('/success');
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
      <h2>Pick Up</h2>
        <label >Pick Up Day
        <input type="date" name="pick_up"  min="2024-09-11" max="2035-01-01"/>
        </label>
        <label className="input"  for="pick_up">Choose a Time for Pick Up</label>
        <input type="time" id="pick_up" value="09:00:00" step="00:15" name="pick_up" min="09:00" max="18:00" required />

        
            {/* <small>Office hours are 9am to 6pm</small> */}
          <fieldset>
            
              {/* <div key={location.zip_code} className="location-container"> */}
                {/* <input
                  type="radio"
                  id={location.zipCode}
                  name="location"
                  value={location.zipCode}
                  onChange={handleLocationChange}
                />
                <label htmlFor={location.zipCode}>
                  <strong>{id + 1}. {location.name}</strong><br />
                  {location.zipCode}<br />
                  {location.contactInfo}
                </label> */}
              {/* </div> */}
            
          </fieldset>
      
       
        
        <div className="flex flex-row">
          <button className='back-button' onClick={handleBack}>
            BACK
          </button>
          <button
            className='reset-submit-button'
            type="button"
            // disabled={!selectedLocation} // Disable Next button until a location is selected
            onClick={handleSubmit}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default PickUpPage;
