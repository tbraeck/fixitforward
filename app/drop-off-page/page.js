'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useZipCode } from '../context/ZipCodeContext';

const DropOffPage = () => {
  const router = useRouter();
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const { zipCode } = useZipCode();  // Access zipCode from context

  console.log(zipCode, "zip code is here");

  // Fetch the data only once when the component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch('/data.json');
        if (!res.ok) throw new Error("Failed to fetch data");
        let jsonData = await res.json();
        setData(jsonData);  // Save fetched data
        console.log(jsonData, "all that data is here");
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    }
    fetchData();
  }, []);

  // Filter locations based on the zipCode whenever data or zipCode changes
  useEffect(() => {
    if (data.length > 0 && zipCode) {
      const nearbyLocations = data.filter(location =>
        location.zipCode.startsWith(zipCode.slice(0, 3))
      );
      console.log('Filtered Locations:', nearbyLocations); // Debug line
      setFilteredLocations(nearbyLocations.slice(0, 5));  // Limit to 5 locations
    }
  }, [data, zipCode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(zipCode);
    router.push('/success');
  };

  const handleBack = () => {
    router.push('/transport');
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

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
        <label className="input" htmlFor="time">Drop Off Time</label>
        <input type="time" 
          id="delivery" 
          step="00:15" 
          name="delivery" 
          min="09:00" 
          max="18:00" 
          value={time}
          onChange={handleTimeChange} 
          required 
        />
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
            disabled={!selectedLocation} // Disable Next button until a location is selected
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
