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
    router.push('/success-repair');
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
      <div className="form-container-repair">
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
                            {/* <div className="transport-option"> */}
                                {/* <legend className='mt-4'>Days Available*</legend> */}
                                {/* <label  >
                                    <input
                                        type="checkbox"
                                        value="Monday"
                                        // checked={productsAccepted.includes('Monday')}
                                        // onChange={() => toggleRepairType('Monday')}
                                    />
                                    Monday
                                </label>
                            </div> */}
                    
                    <div class="flex items-center gap-2 mb-4 mt-6">
    <label for="mondayFromH" class="w-16 mr-6">Monday:</label>
    
    <select name="fromHour" id="mondayFromH" class="p-2 border rounded">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9" selected>9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    
    <select name="fromMinute" id="mondayFromM" class="p-2 border rounded">
        <option value=":00" selected>:00</option>
        <option value=":15">:15</option>
        <option value=":30">:30</option>
        <option value=":45">:45</option>
    </select>
    
    <select name="fromPeriod" id="mondayFromAP" class="p-2 border rounded">
        <option value="AM" selected>AM</option>
        <option value="PM">PM</option>
    </select>
    
    <span>to</span>
    
    <select name="toHour" id="mondayToH" class="p-2 border rounded">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5" selected>5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    
    <select name="toMinute" id="mondayToM" class="p-2 border rounded">
        <option value=":00" selected>:00</option>
        <option value=":15">:15</option>
        <option value=":30">:30</option>
        <option value=":45">:45</option>
    </select>
    
    <select name="toPeriod" id="mondayToAP" class="p-2 border rounded">
        <option value="AM">AM</option>
        <option value="PM" selected>PM</option>
    </select>
    
    <label for="mondayClosed" class="w-16">Closed:</label>
    <input type="checkbox" id="mondayClosed" name="mondayClosed" value="closed" class="form-checkbox h-5 w-5"/>
</div>

    {/* Tuesday */}
    <div class="flex items-center gap-2 mb-4">

    <label for="tuesdayFromH" class="w-16 mr-6">Tuesday:</label>
    
    <select name="fromHour" id="tuesdayFromH" class="p-2 border rounded">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9" selected>9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    
    <select name="fromMinute" id="tuesdayFromM" class="p-2 border rounded">
        <option value=":00" selected>:00</option>
        <option value=":15">:15</option>
        <option value=":30">:30</option>
        <option value=":45">:45</option>
    </select>
    
    <select name="fromPeriod" id="tuesdayFromAP" class="p-2 border rounded">
        <option value="AM" selected>AM</option>
        <option value="PM">PM</option>
    </select>
    
    <span>to</span>
    
    <select name="toHour" id="tuesdayToH" class="p-2 border rounded">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5" selected>5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    
    <select name="toMinute" id="tuesdayToM" class="p-2 border rounded">
        <option value=":00" selected>:00</option>
        <option value=":15">:15</option>
        <option value=":30">:30</option>
        <option value=":45">:45</option>
    </select>
    
    <select name="toPeriod" id="tuesdayToAP" class="p-2 border rounded">
        <option value="AM">AM</option>
        <option value="PM" selected>PM</option>
    </select>
    
    <label for="tuesdayClosed" class="w-16">Closed:</label>
    <input type="checkbox" id="tuesdayClosed" name="tuesdayClosed" value="closed" class="form-checkbox h-5 w-5"/>
</div>
    {/* Wednesday */}
    <div class="flex items-center gap-2 mb-4">

    <label for="wednesdayFromH" class="w-16 mr-6">Wednesday:</label>
    
    <select name="fromHour" id="wednesdayFromH" class="p-2 border rounded">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9" selected>9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    
    <select name="fromMinute" id="wednesdayFromM" class="p-2 border rounded">
        <option value=":00" selected>:00</option>
        <option value=":15">:15</option>
        <option value=":30">:30</option>
        <option value=":45">:45</option>
    </select>
    
    <select name="fromPeriod" id="wednesdayFromAP" class="p-2 border rounded">
        <option value="AM" selected>AM</option>
        <option value="PM">PM</option>
    </select>
    
    <span>to</span>
    
    <select name="toHour" id="wednesdayToH" class="p-2 border rounded">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5" selected>5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    
    <select name="toMinute" id="wednesdayToM" class="p-2 border rounded">
        <option value=":00" selected>:00</option>
        <option value=":15">:15</option>
        <option value=":30">:30</option>
        <option value=":45">:45</option>
    </select>
    
    <select name="toPeriod" id="wednesdayToAP" class="p-2 border rounded">
        <option value="AM">AM</option>
        <option value="PM" selected>PM</option>
    </select>
    
    <label for="wednesdayClosed" class="w-16">Closed:</label>
    <input type="checkbox" id="wednesdayClosed" name="wednesdayClosed" value="closed" class="form-checkbox h-5 w-5"/>
</div>

    {/* Thursday */}
    <div class="flex items-center gap-2 mb-4">

    <label for="thursdayFromH" class="w-16 mr-6">Thursday:</label>
    
    <select name="fromHour" id="thursdayFromH" class="p-2 border rounded">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9" selected>9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    
    <select name="fromMinute" id="thursdayFromM" class="p-2 border rounded">
        <option value=":00" selected>:00</option>
        <option value=":15">:15</option>
        <option value=":30">:30</option>
        <option value=":45">:45</option>
    </select>
    
    <select name="fromPeriod" id="thursdayFromAP" class="p-2 border rounded">
        <option value="AM" selected>AM</option>
        <option value="PM">PM</option>
    </select>
    
    <span>to</span>
    
    <select name="toHour" id="thursdayToH" class="p-2 border rounded">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5" selected>5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    
    <select name="toMinute" id="thursdayToM" class="p-2 border rounded">
        <option value=":00" selected>:00</option>
        <option value=":15">:15</option>
        <option value=":30">:30</option>
        <option value=":45">:45</option>
    </select>
    
    <select name="toPeriod" id="thursdayToAP" class="p-2 border rounded">
        <option value="AM">AM</option>
        <option value="PM" selected>PM</option>
    </select>
    
    <label for="thursdayClosed" class="w-16">Closed:</label>
    <input type="checkbox" id="thursdayClosed" name="thursdayClosed" value="closed" class="form-checkbox h-5 w-5"/>
</div>

    {/* Friday */}
    <div class="flex items-center gap-2 mb-4">

    <label for="mondayFromH" class="w-16 mr-9">Friday:</label>
    
    <select name="fromHour" id="mondayFromH" class="p-2 border rounded">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9" selected>9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    
    <select name="fromMinute" id="mondayFromM" class="p-2 border rounded">
        <option value=":00" selected>:00</option>
        <option value=":15">:15</option>
        <option value=":30">:30</option>
        <option value=":45">:45</option>
    </select>
    
    <select name="fromPeriod" id="mondayFromAP" class="p-2 border rounded">
        <option value="AM" selected>AM</option>
        <option value="PM">PM</option>
    </select>
    
    <span>to</span>
    
    <select name="toHour" id="mondayToH" class="p-2 border rounded">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5" selected>5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    
    <select name="toMinute" id="mondayToM" class="p-2 border rounded">
        <option value=":00" selected>:00</option>
        <option value=":15">:15</option>
        <option value=":30">:30</option>
        <option value=":45">:45</option>
    </select>
    
    <select name="toPeriod" id="mondayToAP" class="p-2 border rounded">
        <option value="AM">AM</option>
        <option value="PM" selected>PM</option>
    </select>
    
    <label for="mondayClosed" class="w-16">Closed:</label>
    <input type="checkbox" id="mondayClosed" name="mondayClosed" value="closed" class="form-checkbox h-5 w-5"/>
</div>

    {/* Saturday */}
    <div class="flex items-center gap-2 mb-4">

    <label for="mondayFromH" class="w-16 mr-6">Saturday:</label>
    
    <select name="fromHour" id="mondayFromH" class="p-2 border rounded">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9" selected>9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    
    <select name="fromMinute" id="mondayFromM" class="p-2 border rounded">
        <option value=":00" selected>:00</option>
        <option value=":15">:15</option>
        <option value=":30">:30</option>
        <option value=":45">:45</option>
    </select>
    
    <select name="fromPeriod" id="mondayFromAP" class="p-2 border rounded">
        <option value="AM" selected>AM</option>
        <option value="PM">PM</option>
    </select>
    
    <span>to</span>
    
    <select name="toHour" id="mondayToH" class="p-2 border rounded">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5" selected>5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    
    <select name="toMinute" id="mondayToM" class="p-2 border rounded">
        <option value=":00" selected>:00</option>
        <option value=":15">:15</option>
        <option value=":30">:30</option>
        <option value=":45">:45</option>
    </select>
    
    <select name="toPeriod" id="mondayToAP" class="p-2 border rounded">
        <option value="AM">AM</option>
        <option value="PM" selected>PM</option>
    </select>
    
    <label for="mondayClosed" class="w-16">Closed:</label>
    <input type="checkbox" id="mondayClosed" name="mondayClosed" value="closed" class="form-checkbox h-5 w-5"/>
</div>

    {/* sunday */}
    <div class="flex items-center gap-2 mb-4">

    <label for="mondayFromH" class="w-16 mr-7">Sunday:</label>
    
    <select name="fromHour" id="mondayFromH" class="p-2 border rounded">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9" selected>9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    
    <select name="fromMinute" id="mondayFromM" class="p-2 border rounded">
        <option value=":00" selected>:00</option>
        <option value=":15">:15</option>
        <option value=":30">:30</option>
        <option value=":45">:45</option>
    </select>
    
    <select name="fromPeriod" id="mondayFromAP" class="p-2 border rounded">
        <option value="AM" selected>AM</option>
        <option value="PM">PM</option>
    </select>
    
    <span>to</span>
    
    <select name="toHour" id="mondayToH" class="p-2 border rounded">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5" selected>5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    
    <select name="toMinute" id="mondayToM" class="p-2 border rounded">
        <option value=":00" selected>:00</option>
        <option value=":15">:15</option>
        <option value=":30">:30</option>
        <option value=":45">:45</option>
    </select>
    
    <select name="toPeriod" id="mondayToAP" class="p-2 border rounded">
        <option value="AM">AM</option>
        <option value="PM" selected>PM</option>
    </select>
    
    <label for="mondayClosed" class="w-16">Closed:</label>
    <input type="checkbox" id="mondayClosed" name="mondayClosed" value="closed" class="form-checkbox h-5 w-5"/>
</div>

 {/* <div className="transport-option">
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
                            </div> */}

                            
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
