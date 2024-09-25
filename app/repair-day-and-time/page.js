
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDateAndTimeRepair } from '../context/DateAndTimeRepairContext';

const RepairDayAndTime = () => {
  const router = useRouter();
  const { date, setDate, time, setTime } = useDateAndTimeRepair();
  const [hours, setHours] = useState({
    monday: { fromHour: '9', fromMinute: ':00', fromPeriod: 'AM', toHour: '5', toMinute: ':00', toPeriod: 'PM', closed: false },
    tuesday: { fromHour: '9', fromMinute: ':00', fromPeriod: 'AM', toHour: '5', toMinute: ':00', toPeriod: 'PM', closed: false },
    wednesday: { fromHour: '9', fromMinute: ':00', fromPeriod: 'AM', toHour: '5', toMinute: ':00', toPeriod: 'PM', closed: false },
    thursday: { fromHour: '9', fromMinute: ':00', fromPeriod: 'AM', toHour: '5', toMinute: ':00', toPeriod: 'PM', closed: false },
    friday: { fromHour: '9', fromMinute: ':00', fromPeriod: 'AM', toHour: '5', toMinute: ':00', toPeriod: 'PM', closed: false },
    saturday: { fromHour: '9', fromMinute: ':00', fromPeriod: 'AM', toHour: '5', toMinute: ':00', toPeriod: 'PM', closed: false },
    sunday: { fromHour: '9', fromMinute: ':00', fromPeriod: 'AM', toHour: '5', toMinute: ':00', toPeriod: 'PM', closed: false }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(hours);
    router.push('/success-repair');
  };

  const handleBack = () => {
    router.push('/transport-repair');
  };

  const handleDayChange = (day, field, value) => {
    setHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }));
  };

  const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return (
    <div className="form-page">
      <div className="form-container-repair">
        <h2>Business Days and Times</h2>
        <div className="transport-options">
          {daysOfWeek.map((day) => (
            <div key={day} className="flex items-center gap-2 mb-4 mt-6">
              <label htmlFor={`${day}FromH`} className="w-16 mr-6 capitalize">
                {day}:
              </label>
              <select
                name="fromHour"
                id={`${day}FromH`}
                className="p-2 border rounded"
                value={hours[day].fromHour}
                onChange={(e) => handleDayChange(day, 'fromHour', e.target.value)}
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select
                name="fromMinute"
                id={`${day}FromM`}
                className="p-2 border rounded"
                value={hours[day].fromMinute}
                onChange={(e) => handleDayChange(day, 'fromMinute', e.target.value)}
              >
                <option value=":00">:00</option>
                <option value=":15">:15</option>
                <option value=":30">:30</option>
                <option value=":45">:45</option>
              </select>
              <select
                name="fromPeriod"
                id={`${day}FromAP`}
                className="p-2 border rounded"
                value={hours[day].fromPeriod}
                onChange={(e) => handleDayChange(day, 'fromPeriod', e.target.value)}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>

              <span>to</span>

              <select
                name="toHour"
                id={`${day}ToH`}
                className="p-2 border rounded"
                value={hours[day].toHour}
                onChange={(e) => handleDayChange(day, 'toHour', e.target.value)}
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select
                name="toMinute"
                id={`${day}ToM`}
                className="p-2 border rounded"
                value={hours[day].toMinute}
                onChange={(e) => handleDayChange(day, 'toMinute', e.target.value)}
              >
                <option value=":00">:00</option>
                <option value=":15">:15</option>
                <option value=":30">:30</option>
                <option value=":45">:45</option>
              </select>
              <select
                name="toPeriod"
                id={`${day}ToAP`}
                className="p-2 border rounded"
                value={hours[day].toPeriod}
                onChange={(e) => handleDayChange(day, 'toPeriod', e.target.value)}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>

              <label htmlFor={`${day}Closed`} className="w-16">
                Closed:
              </label>
              <input
                type="checkbox"
                id={`${day}Closed`}
                name={`${day}Closed`}
                className="form-checkbox h-5 w-5"
                checked={hours[day].closed}
                onChange={(e) => handleDayChange(day, 'closed', e.target.checked)}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-row mt-2 justify-center items-center">
          <button className='back-button' onClick={handleBack}>
           BACK
           </button>
            <button
            className='reset-submit-button'
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
