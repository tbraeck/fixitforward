'use client';

import { useRouter } from "next/navigation";
import { useDateAndTimeRepair } from "../context/DateAndTimeRepairContext";
import { useRepair } from "../context/RepairContext";
import { useTransportRepair } from "../context/TransportContextRepair";

const SuccessRepair = () => {
  const router = useRouter(); 
  const { times } = useDateAndTimeRepair();
  
  // Render times correctly by accessing properties of each time object
  const timesNew = times.map((time, index) => (
    <li key={index}>
      <b>{time.day}:</b> {time.closed ? "Closed" : time.hours || "Unknown"}
    </li>
  ));

  const { 
    companyName,
    address, 
    email, 
    phoneNumber, 
    zipCode, 
    productsAccepted, 
    typeOfRepair,  
  } = useRepair();

  const { transport } = useTransportRepair(); // Ensure this returns an array

  const handleSubmit = (e) => {
    e.preventDefault(); 
    router.push('/');
  }

  const handleBack = (e) => { 
    e.preventDefault();
    router.push('/repair-day-and-time');
  }

  const renderTransportDetails = (transport) => {
    return (
      <ul>
        {transport.map((trans, index) => (
          <li key={index}>{trans}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className='form-page-success'>
      <div className="success-form-repair ">
        <h1>Congratulations!</h1>
        <h2 className="mb-4">You are all set to make repairs/resell for FixItForward!</h2>
        <div className="repair-info ">
          <h2 className="pb-2"><u>Contact Information</u></h2>
          <p><b>Company Name:</b>&nbsp;{companyName}</p>
          <p><b>Address:</b>&nbsp;{address}</p>
          <p><b>Zip Code:</b>&nbsp;{zipCode}</p>
          <p><b>Phone #:</b>&nbsp;{phoneNumber}</p>
          <p><b>Email:</b>&nbsp;{email}</p>
          <div className="flex flex-row justify-between space-x-8 mt-2">
            <div>
              <b>You repair and resell:</b>
              <ul>
                {productsAccepted.map((product, index) => (
                  <li key={index}>{product}</li>
                ))}
              </ul>
            </div>
            <div>
              <b>Damage You Accept:</b>
              <ul>
                {typeOfRepair.map((repair, index) => (
                  <li key={index}>{repair}</li>
                ))}
              </ul>
            </div>
            <div>
              <b>Transport Methods:</b>
              {renderTransportDetails(transport)} {/* Pass the transport array here */}
            </div>
          </div>
          <h2 className="mt-4 mb-2"><u>Hours of Operation</u></h2>
          <ul>{timesNew}</ul> {/* Render times as a list */}
        </div>

        <div className="flex flex-row mt-6 justify-center ">
          <button className='back-button' onClick={handleBack}>
            BACK
          </button>
          <button className='reset-submit-button' type="submit" onClick={handleSubmit}>
            ALL DONE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessRepair;
