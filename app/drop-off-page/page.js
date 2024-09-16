'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Simulate fetching data from the data.json file
const fetchLocations = async () => {
  try {
    const res = await fetch('/data.json');
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    console.log(data, "all that data is here");
    return data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return []; // Return an empty array if an error occurs
  }
};

const DropOffPage = ({ zipCode }) => {
  const router = useRouter();
  const[time, setTime] = useState('');
  const[date, setDate] = useState('');
  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [filteredLocations, setFilteredLocations] = useState([]);
  
  console.log(zipCode, "zip code is here")
  useEffect(() => {
    const getFilteredLocations = async () => {
      const data = await fetchLocations();
console.log(data)
      if (!Array.isArray(data)) {
        console.error("Data is not an array");
        return;
      }

      // Filter locations based on the client's zip code (assuming nearby zip codes logic)
      const nearbyLocations = data.filter(location => 
        location.zipCode.startsWith(zipCode.slice(0, 3))
      );

      // Select top 5 locations
      setFilteredLocations(nearbyLocations.slice(0, 5));
    };

    if (zipCode) {
      getFilteredLocations();
    }
  }, [zipCode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location, "locations are here");
    router.push('/success');
};

  const handleBack = () => {
    router.push('/transport');
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleDateChange= (e) => {
    e.preventDefault();

    setDate(e.target.value);
  }

  const handleTimeChange= (e) => {
    e.preventDefault();

    setTime(e.target.value);
  }

  console.log(filteredLocations, "filtered locations to display");

  return (
    <div className="form-page">
      <div className="form-container">
      <label htmlFor="date">Drop Off Day
        <input type="date" 
          name="date"  
          min="2024-09-11" 
          max="2035-01-01"
          value={date}
          onChange={handleDateChange} 
        />
        </label>
        <label className="input"  htmlFor="time">Drop Off Time</label>
        <input type="time" id="delivery" 
          onChange={handleTimeChange} 
          step="00:15" 
          name="delivery" 
          min="09:00" 
          max="18:00" 
          value={time}
          required />
        <h2>Select a Drop Off Location</h2>
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

export default DropOffPage;
