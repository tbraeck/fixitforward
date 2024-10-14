'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDateAndTime } from '../context/DateAndTimeContext';
import { useDonate } from '../context/DonateContext';
import { useDonors } from '../context/DonorContext';
import { useSellers } from '../context/SellerContext';

const DropOffPage = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [filteredSellers, setFilteredSellers] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  
const {date, setDate, time, setTime} = useDateAndTime(); 
const {zipCode} = useDonate();
const {allSellers, setAllSellers} = useSellers();
const {allDonors, setAllDonors} = useDonors();
// console.log(allSellers, "here is all the sellers")
// console.log(allDonors, "here is all the donors")
useEffect(() => {
  if (allSellers.length > 0 && zipCode) {
    const nearbySellers = allSellers.filter(location =>
      location.zipCode.startsWith(zipCode.slice(0, 3))
    );
    console.log('Filtered Sellers:', nearbySellers); 
    setFilteredSellers(nearbySellers.slice(0, 2));  // Limit to 2 sellers
  }
}, [allSellers, zipCode]);

useEffect(() => {
  if (allDonors.length > 0 && zipCode) {
    const nearbyDonors = allDonors.filter(location =>
      location.zipCode.startsWith(zipCode.slice(0, 3))
    );
    console.log('Filtered Donors:', nearbyDonors);
    setFilteredDonors(nearbyDonors.slice(0, 2));  // Limit to 2 donors
  }
}, [allDonors, zipCode]);


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
                <strong>{index + 1}.<br /> {location.companyName}</strong><br />
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
