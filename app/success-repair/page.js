'use client'

import { useRouter } from "next/navigation";
import { useDateAndTimeRepair } from "../context/DateAndTimeRepairContext";
import { useRepair } from "../context/RepairContext";
import { useTransportRepair } from "../context/TransportContextRepair";

const SuccessRepair = () => {
  const router = useRouter(); 
  const { date, time } = useDateAndTimeRepair(); 
  const { 
    companyName,
     address, 
     email, 
     phoneNumber, 
     zipCode, 
     productsAccepted, 
     typeOfRepair,  
  } = useRepair();

  const { transport } = useTransportRepair([]);
console.log(transport, phoneNumber)

  const handleSubmit = (e) => {
    e.preventDefault(); 
    router.push('/');
  }

  const handleBack = (e) => { 
    e.preventDefault();
    router.push('/repair-day-and-time');
  }

  const renderTransportDetails = () => {
    if (transport === 'Drop-Off') {
      return (
        <p>
          <b>Transport Type:</b> Drop-Off<br />
          <b>Drop-Off Location:</b> 123 Donation Center, Main Street
        </p>
      );
    } else if (transport === 'Pick Up') {
      return (
        <p>
          <b>Transport Type:</b> Pick Up<br />
          <b>Company Name:</b> Donation Pickups Inc.<br />
          <b>Contact Info:</b> 555-1234<br />
          <b>Pick Up Date and Time:</b> {date} at {time}
        </p>
      );
    } else if (transport === 'Delivery Service') {
      return (
        <p>
          <b>Transport Type:</b> Delivery Service<br />
          <b>Delivery Company:</b> FastShip Delivery<br />
          <b>Tracking Number:</b> ABC123456789
        </p>
      );
    } else {
      return <p>No transport method selected.</p>;
    }
  }
  
  return (
    <div className='form-page-success'>
      <div className="success-form-repair ">
        <h1>Congratulations! </h1>
        <h2 className="mb-4">You are all set to make be a repair/ reseller for FixItForward!</h2>
        {/* <p className="mb-2">Here&apos;s the details of your company&apos;s contribution to FixItForward for your records:</p> */}
       <div className="repair-info">
        <h2 className="pb-2">Contact Information:</h2>
        <p><b>Company Name:</b>&nbsp;{companyName}</p>
        <p><b>Address:</b>&nbsp;{address}</p>
        <p><b>Zip Code:</b>&nbsp;{zipCode}</p>
        <p><b>Phone #:</b>&nbsp;{phoneNumber}</p>
        <p><b>Email:</b>&nbsp;{email}</p>
        <div className="flex flex-row justify-between space-x-8 mt-2">
        <p>
            <b>You repair and resell:</b>
            <ul>
              {productsAccepted.map((product, index) => (
                <li key={index}>{product}</li>  // Add key prop for each list item
              ))}
            </ul>
          </p>
          <p>
            <b>Damage You Accept:</b>
            <ul>
              {typeOfRepair.map((repair, index) => (
                <li key={index}>{repair}</li>  // Add key prop for each list item
              ))}
            </ul>
          </p>
          {renderTransportDetails()}
         
          </div>
        <h2 className="mt-4">Hours of Operation</h2>
        {/* {renderTransportDetails()} Conditional rendering of transport details */}
        <p><b>Days:</b>&nbsp;{date}</p>
        <p><b>Times:</b>&nbsp;{time}</p>
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
  )
}

export default SuccessRepair;
