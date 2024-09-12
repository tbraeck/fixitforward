'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

// Simulate fetching data from the data.json file
const fetchLocations = async () => {
  const res = await fetch('./data.json'); // Replace with your actual JSON file path
  const data = await res.json();
  console.log(data, "all that data is here")
  return data;
}

const DropOffPage = ({ zipCode }) => {
  const router = useRouter();
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [filteredLocations, setFilteredLocations] = useState([]);
  
  // Fetch data and filter it based on the zip code
//   useEffect(() => {
//     const getFilteredLocations = async () => {
//       const data = await fetchLocations();

//       // Filter locations based on the client's zip code (assuming nearby zip codes logic)
//       const nearbyLocations = data.filter(location => 
//         location.zipCode.startsWith(zipCode.slice(0, 3)) // Simplistic filtering by first 3 digits of zip
//       );

//       // Select top 5
//       setFilteredLocations(nearbyLocations.slice(0, 5));
//     };

//     getFilteredLocations();
//   }, [zipCode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, lastName, email, phoneNumber, product, brand, howBroken);
    router.push('/success');
};

  const handleBack = () => {
    router.push('/transport');
  };

//   const handleLocationChange = (e) => {
//     setSelectedLocation(e.target.value);
//   };

  return (
    <div className="form-page">
      <div className="form-container">
      <label >Drop Off Day
        <input type="date" name="drop_off"  min="2024-09-11" max="2035-01-01"/>
        </label>
        <label className="input"  htmlFor="drop_off">Choose a Time for Pick Up</label>
        <input type="time" id="drop_off" value="09:00:00" step="00:15" name="drop_off" min="09:00" max="18:00" required />
        <h2>Select a Drop Off Location</h2>
        {/* {filteredLocations.length > 0 ? (
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
          </fieldset> */}
        {/* ) : ( */}
          <p>Loading nearby locations...</p>
        {/* )} */}
        
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
