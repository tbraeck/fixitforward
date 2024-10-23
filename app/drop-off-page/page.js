'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDateAndTime } from '../context/DateAndTimeContext';
import { useDonate } from '../context/DonateContext';
import { useSellers } from '../context/SellerContext';

const DropOffPage = () => {
  const router = useRouter();
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null); // Store the full selected location
  
  const { date, setDate, time, setTime } = useDateAndTime(); 
  const { zipCode } = useDonate();
  const { allSellers } = useSellers();

  // useEffect to filter and sort sellers by distance
  useEffect(() => {
    if (allSellers.length > 0 && zipCode) {
      const donorZip = parseInt(zipCode, 10);
      const sellersWithDistance = allSellers.map(location => {
        const sellerZip = parseInt(location.zipCode, 10);
        const distance = Math.abs(sellerZip - donorZip);
        return { ...location, distance };
      });

      // Sort sellers by distance and limit to 2 closest
      const closestSellers = sellersWithDistance
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 2);

      setFilteredLocations(closestSellers);
    }
  }, [allSellers, zipCode]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to success page with selectedLocation as a query parameter
    if (selectedLocation) {
      console.log(selectedLocation)
      router.push(`/success?selectedLocation=${selectedLocation}`);
    }
  };

  // Handle the Back button
  const handleBack = () => {
    router.push('/transport');
  };

  // Handle location selection (store the full location object)
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    console.log("Selected location is", location);
  };

  // Handle date change
  const handleDateChange = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  // Handle time change
  const handleTimeChange = (e) => {
    e.preventDefault();
    setTime(e.target.value);
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h2 className="mb-4 text-blue-500"><u>Select a Drop Off Day and Time</u></h2>

        {/* Drop Off Day */}
        <label htmlFor="date">Drop Off Day
          <input 
            type="date" 
            name="date" 
            min="2024-09-11" 
            max="2035-01-01"
            value={date} 
            onChange={handleDateChange} 
          />
        </label>

        {/* Drop Off Time */}
        <label className="input" htmlFor="time">Drop Off Time</label>
        <input 
          type="time" 
          id="delivery" 
          step="00:15" 
          name="delivery" 
          min="09:00" 
          max="18:00" 
          value={time} 
          onChange={handleTimeChange} 
          required 
        />

        {/* Drop Off Location */}
        <h2 className="mb-4 text-blue-500"><u>Select a Drop Off Location</u></h2>
        {filteredLocations.length > 0 ? (
          <fieldset className="space-y-4">
            {filteredLocations.map((location, index) => (
              <div 
                key={location.id} 
                className="location-container flex justify-between items-center p-4 border border-gray-400 rounded-md"
              >
                <div className="drop-off-location flex-grow">
                  <label htmlFor={location.zipCode}>
                    <strong>{index + 1}.<br /> {location.company_name || 'Donor'}</strong><br />
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
                    onChange={() => handleLocationChange(location)} // Pass the entire location object
                    className="mr-12 transform scale-150"
                  />
                </div>
              </div>
            ))}
          </fieldset>
        ) : (
          <p className="text-gray-500">Loading nearby locations...</p>
        )}

        {/* Display selected location details */}
        {selectedLocation && (
          <div className="mt-4">
            <h3>Selected Location:</h3>
            <p><strong>Address:</strong> {selectedLocation.address}</p>
            <p><strong>Zip Code:</strong> {selectedLocation.zipCode}</p>
            <p><strong>Phone Number:</strong> {selectedLocation.phone_number}</p>
            <p><strong>Email:</strong> {selectedLocation.email}</p>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex flex-row mt-2 justify-center items-center">
          <button className="back-button" onClick={handleBack}>
            BACK
          </button>
          <button
            className="reset-submit-button"
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
