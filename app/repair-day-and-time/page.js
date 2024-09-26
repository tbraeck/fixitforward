'use client';

import { useRouter } from 'next/navigation';
import { useDateAndTimeRepair } from '../context/DateAndTimeRepairContext';

const RepairDayAndTime = () => {
  const router = useRouter();
  const { times, setTimes } = useDateAndTimeRepair();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting times:', times);
    router.push('/success-repair');
  };

  const handleBack = () => {
    router.push('/transport-repair');
  };

  const handleDayChange = (day, field, value) => {
    console.log(`Changing ${field} for ${day}:`, value);
    
    setTimes((prev) => {
      const updatedTimes = prev.map(item =>
        item.day === day ? { ...item, [field]: value } : item
      );

      console.log('Updated times:', updatedTimes);
      return updatedTimes;
    });
  };

  const daysOfWeek = [
    'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
  ];

  return (
    <div className="form-page">
      <div className="form-container-repair">
        <h2>Business Days and Times</h2>
        
        <div className="transport-options">
          {daysOfWeek.map((day) => (
            <div key={day} className="day-inputs flex items-center ">
              <div className="form-group flex items-center mr-1">
                <p htmlFor={day} className="donation-info capitalize mr-1">{day}</p>
                {/* <input
                  type="checkbox"
                  id={day}
                  className="form-checkbox h-4 w-4"
                  checked={times.find(item => item.day === day)?.closed || false}
                  onChange={(e) => handleDayChange(day, 'closed', e.target.checked)}
                /> */}
              </div>

              <div className="form-group flex items-center ">
                <label htmlFor={`${day}Times`} className="form-label mr-1">Hours*</label>
                <select 
                  id={`${day}Times`} 
                  name={`${day}Times`} 
                  value={times.find(item => item.day === day)?.hours || 'unknown'} // Default value
                  required
                  onChange={(e) => handleDayChange(day, 'hours', e.target.value)}
                  className="form-select"
                >
                  <option value="7:00am-3:00pm">7:00am - 3:00pm</option>
                  <option value="8:00am-4:00pm">8:00am - 4:00pm</option>
                  <option value="9:00am-5:00pm">9:00am - 5:00pm</option>
                  <option value="10:00am-6:00pm">10:00am - 6:00pm</option>
                  <option value="11:00am-7:00pm">11:00am - 7:00pm</option>
                  <option value="unknown">unknown</option>
                </select>
              </div>
              <div className="form-group flex items-center ">

              <p htmlFor={day} className="form-label capitalize mr-1">Closed</p>
                <input
                  type="checkbox"
                  id={day}
                  className="form-checkbox h-4 w-4"
                  checked={times.find(item => item.day === day)?.closed || false}
                  onChange={(e) => handleDayChange(day, 'closed', e.target.checked)}
                />
            </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row mt-2 justify-center items-center">
          <button className='back-button' onClick={handleBack}>
            BACK
          </button>
          <button
            className='reset-submit-button ml-1'
            type="button"
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
