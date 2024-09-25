'use client'

import { useRouter } from "next/navigation";
import { useDateAndTimeRepair } from "../context/DateAndTimeRepairContext";
import { useRepair } from "../context/RepairContext";
import { useTransportRepair } from "../context/TransportContextRepair";

const SuccessRepair = ({ details }) => {
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

  const { transport } = useTransportRepair();

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
      <div className="success-form ">
        <h1>Congratulations! </h1>
        <h2 className="mb-4">You are all set to make be a repair/ reseller for FixItForward!</h2>
        <p className="mb-4">Here&apos;s the details of your company&apos;s contribution to FixItForward for your records:</p>
       <div className="donation-info">
        <h2>Contact Information:</h2>
        <p><b>Company Name:</b>&nbsp;{companyName}</p>
        <p><b>Address:</b>&nbsp;{address}</p>
        <p><b>Zip Code:</b>&nbsp;{zipCode}</p>
        <p><b>Phone #:</b>&nbsp;{phoneNumber}</p>
        <p><b>Email:</b>&nbsp;{email}</p>
        <p>
          <b>Products you repair and resell are:</b>&nbsp;{productsAccepted}<br />
          {/* <b>Condition:</b>&nbsp;{howBroken} */}
        </p>
        
        <h2 className="mt-4">Donation Details</h2>
        {/* {renderTransportDetails()} Conditional rendering of transport details */}
        <p><b>Date:</b>&nbsp;{date}</p>
        <p><b>Time:</b>&nbsp;{time}</p>
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
