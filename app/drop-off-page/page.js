'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDateAndTime } from '../context/DateAndTimeContext';
import { useDonate } from '../context/DonateContext';
import { useDonors } from '../context/DonorContext';
import { useSellers } from '../context/SellerContext';

const DropOffPage = () => {
  const router = useRouter();
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  const { date, setDate, time, setTime } = useDateAndTime(); 
  const { zipCode } = useDonate();
  const { allSellers } = useSellers();
  const { allDonors } = useDonors();
console.log(allSellers, "all sellers are here")
console.log(allDonors, "all sellers are here")

  useEffect(() => {
    // Combine filtered sellers  donors
    if ((allSellers.length > 0 || allDonors.length > 0) && zipCode) {
      const filteredSellers = allSellers.filter(location =>
        location.zipCode.startsWith(zipCode.slice(0, 3))
      );

      const filteredDonors = allDonors.filter(location =>
        location.zipCode.startsWith(zipCode.slice(0, 3))
      );

      // Combine both sellers and donors into a single array
      const combinedLocations = [...filteredSellers, ...filteredDonors].slice(0, 2); // Limit to 2 locations
      setFilteredLocations(combinedLocations);
    }
  }, [allSellers, allDonors, zipCode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/success');
  };

  const handleBack = () => {
    router.push('/transport');
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleDateChange = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    e.preventDefault();
    setTime(e.target.value);
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h2 className='mb-4 text-blue-500'><u>Select a Drop Off Day and Time</u></h2>

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
        <br/>
        <h2 className='mb-4 text-blue-500'><u>Select a Drop Off Location</u></h2>
        {filteredLocations.length > 0 ? (
      <fieldset className="space-y-4">
        {filteredLocations.map((location, index) => (
          <div key={location.zipCode} className="location-container flex justify-between items-center p-4 border border-gray-400 rounded-md">
            <div className="drop-off-location flex-grow">
              <label htmlFor={location.zipCode}>
                <strong>{index + 1}.<br /> {location.companyName || 'Donor'}</strong><br />
                {location.address}<br />
                {location.zipCode}<br />
                {location.phone_number}<br />
                {location.email}
              </label>
            </div>
            <div className="ml-4">
              <input
                type="radio"
                id={location.zipCode}
                name="location"
                value={location.zipCode}
                onChange={handleLocationChange}
                className="mr-12 transform scale-150" 
              />
            </div>
          </div>
        ))}
      </fieldset>
    ) : (
      <p className="text-gray-500">Loading nearby locations...</p>
    )}
        
        <div className="flex flex-row mt-2 justify-center items-center">
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
