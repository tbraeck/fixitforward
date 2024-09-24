'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDateAndTimeRepair } from '../context/DateAndTimeRepairContext';
// import { useDonate } from '../context/DonateContext';

const RepairDayAndTime = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  // const [filteredLocations, setFilteredLocations] = useState([]);
  // const [selectedLocation, setSelectedLocation] = useState(null);

const {date, setDate, time, setTime} = useDateAndTimeRepair(); // Access date and time from context
// const {zipCode} = useDonate();

  // Fetch the data only once when the component mounts
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       let res = await fetch('/data.json');
  //       if (!res.ok) throw new Error("Failed to fetch data");
  //       let jsonData = await res.json();
  //       setData(jsonData); 
  //       console.log(jsonData, "all that data is here");
  //     } catch (error) {
  //       console.error("Error fetching locations:", error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // // Filter locations based on the zipCode whenever data or zipCode changes
  // useEffect(() => {
  //   if (data.length > 0 && zipCode) {
  //     const nearbyLocations = data.filter(location =>
  //       location.zipCode.startsWith(zipCode.slice(0, 3))
  //     );
  //     console.log('Filtered Locations:', nearbyLocations); // Debug line
  //     setFilteredLocations(nearbyLocations.slice(0, 2));  // Limit to 5 locations
  //   }
  // }, [data, zipCode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/success');
  };

  const handleBack = () => {
    router.push('/transport-repair');
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
        <h2>Business Days and Times</h2>
        {/* <label htmlFor="date">Drop Off Day
          <input type="date" 
            name="date"  
            min="2024-09-11" 
            max="2035-01-01"
            value={date}
            onChange={handleDateChange} 
          />
        </label> */}
        <div className="transport-options">
                            <div className="transport-option">
                                <legend className='mt-4'>Days Available*</legend>
                                <label  >
                                    <input
                                        type="checkbox"
                                        value="Monday"
                                        // checked={productsAccepted.includes('Monday')}
                                        // onChange={() => toggleRepairType('Monday')}
                                    />
                                    Monday
                                </label>
                            </div>
                            <div className="transport-option">
                                <label  >
                                    <input
                                        type="checkbox"
                                        value="Tuesday"
                                        // checked={productsAccepted.includes('Monday')}
                                        // onChange={() => toggleRepairType('Monday')}
                                    />
                                    Tuesday
                                </label>
                            </div>
                            <div className="transport-option">
                                <label  >
                                    <input
                                        type="checkbox"
                                        value="Wednesday"
                                        // checked={productsAccepted.includes('Monday')}
                                        // onChange={() => toggleRepairType('Monday')}
                                    />
                                    Wednesday
                                </label>
                            </div>
                            <div className="transport-option">
                                <label  >
                                    <input
                                        type="checkbox"
                                        value="Thursday"
                                        // checked={productsAccepted.includes('Monday')}
                                        // onChange={() => toggleRepairType('Monday')}
                                    />
                                    Thursday
                                </label>
                            </div>
                            <div className="transport-option">
                                <label  >
                                    <input
                                        type="checkbox"
                                        value="Friday"
                                        // checked={productsAccepted.includes('Monday')}
                                        // onChange={() => toggleRepairType('Monday')}
                                    />
                                    Friday
                                </label>
                            </div>
                            <div className="transport-option">
                                <label  >
                                    <input
                                        type="checkbox"
                                        value="Saturday"
                                        // checked={productsAccepted.includes('Monday')}
                                        // onChange={() => toggleRepairType('Monday')}
                                    />
                                    Saturday
                                </label>
                            </div>
                            <div className="transport-option">
                                <label  >
                                    <input
                                        type="checkbox"
                                        value="Sunday"
                                        // checked={productsAccepted.includes('Monday')}
                                        // onChange={() => toggleRepairType('Monday')}
                                    />
                                    Sunday
                                </label>
                            </div>

                            
                         </div> 

  
        
        <div className="flex flex-row mt-2 justify-center items-center">
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

export default RepairDayAndTime;
