'use client';

import { useRouter } from "next/navigation";
import { useDateAndTime } from "../context/DateAndTimeContext";
import { useDonate } from "../context/DonateContext";
import { useSellers } from '../context/SellerContext';
import { useTransport } from "../context/TransportContext";

const Success = ({selectedLocation}) => {
  const router = useRouter(); 
  const { company_name, address, zipCode, phone_number } = selectedLocation;

  const { date, time } = useDateAndTime(); 
  const { 
    firstName,  
    lastName, 
    email,
    phoneNumber,  
    product, 
    brand, 
    howBroken 
  } = useDonate();
  const { transport } = useTransport();
  const { allSellers } = useSellers();

  
  // State to hold the location value
  // const [location, setLocation] = useState(selectedLocation);  
  console.log("Selected Location:", selectedLocation);



  const handleSubmit = (e) => {
    e.preventDefault(); 
    router.push('/');
  }

  const handleBack = (e) => { 
    e.preventDefault();
    router.push('/drop-off-page');
  }

  const renderTransportDetails = () => {
    switch (transport) {
      case 'Drop-Off':
        return (
          <p>
            <b>Transport Type:</b> Drop-Off<br />
            <b>Company:</b>{company_name || "N/A"}
            <b>Address:</b>{address || "N/A"}
          </p>
        );
      case 'Pick Up':
        return (
          <p>
            <b>Transport Type:</b> Pick Up<br />
            <b>Company Name:</b> {selectedLocation?.companyName || "N/A"}<br />
            <b>Contact Info:</b> 555-1234<br />
            <b>Pick Up Date and Time:</b> {date} at {time}
          </p>
        );
      case 'Delivery Service':
        return (
          <p>
            <b>Transport Type:</b> Delivery Service<br />
            <b>Delivery Company:</b> FastShip Delivery<br />
            <b>Tracking Number:</b> ABC123456789
          </p>
        );
      default:
        return <p>No transport method selected.</p>;
    }
  };
  

  return (
    <div className='form-page-success'>
      <div className="success-form ">
        <h1 className='text-blue-500'>Congratulations! </h1>

        <h2 className="mb-4 text-blue-500">You are all set to make your donation.</h2>
        <p className="mb-4">Here&apos;s the details of your donation for your records:</p>
        <div className="donation-info">

          <h2 className="mb-2 text-blue-500"><u>Contact Information</u></h2>
          <p><b>Your Name:</b>&nbsp;{firstName}&nbsp;{lastName}</p>
          <p><b>Email:</b>&nbsp;{email}</p>
          <p><b>Phone #:</b>&nbsp;{phoneNumber}</p>
          <p>
            <b>You are donating a:</b>&nbsp;{brand}&nbsp;{product}<br />
            <b>Condition:</b>&nbsp;{howBroken}
          </p>
          
          <h2 className="mt-4 mb-2 text-blue-500"><u>Donation Details</u></h2>
          {renderTransportDetails()} {/* Conditional rendering of transport details */}
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
  );
}

export default Success;
