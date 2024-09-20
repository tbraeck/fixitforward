'use client'

import { useRouter } from "next/navigation";
import { useDateAndTime } from "../context/DateAndTimeContext";
import { useDonate } from "../context/DonateContext";
import { useZipCode } from '../context/ZipCodeContext';

const Success = ({details}) => {
    // const [shop, setShop] = useState('')
    const router = useRouter(); 
    const { zipCode } = useZipCode(); 
    const {date,  time} = useDateAndTime(); 
    const {
      firstName,  
      lastName, 
      email,
      phoneNumber,  
      product, 
      brand, 
      howBroken} = useDonate();

    const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log('you are going forward');
    router.push('/'); 
}
console.log(firstName, lastName)
console.log(date, time, "date and time are here")
const handleBack = (e) => { 
    e.preventDefault(); 

    console.log('you are going back');
    router.push('/drop-off-page');
}

  return (
    <div className='form-page'>
    <div className="App">
        <h1>Congratulations! </h1>
        <h2 className="mb-4">You are all set to make your donation.</h2>
        <p className="mb-4">Here&apos;s the details of your donation for your records:</p>
       
        <p>Your Name:&nbsp;{firstName}{lastName}</p>
        <p>Your Contact Information:&nbsp;{email}{phoneNumber}</p>
        <h2>You are </h2>
        <p>Time:&nbsp;{time}</p>
        <p>:&nbsp;{date}</p>
        <p>Date:&nbsp;{date}</p>
        
        {/* <p>{details}</p> */}
     {/* <fieldset> */}
      {/* <form>
      <label htmlFor="transport">How To Transport Your Donation*</label>
        <select 
            id="transport" 
            name="transport" 
            value={transport}
            required
            onChange={(e) => setTransport(e.target.value)}
        >
                <option value="Drop-Off" >Drop-Off</option>
                <option value="Pick Up">Pick Up</option>
                <option value="Delivery Service">Delivery Service</option>
            </select> */}
            <div className="flex flex-row">
                <button className='back-button'
                onClick={handleBack}>
                    BACK
                </button>
            <button
                className='reset-submit-button'
                type="submit"
                value="Submit"
                onClick={handleSubmit}
            >
                 ALL DONE
            </button>
          
            </div>
            
      {/* </form>
      </fieldset> */}
    </div>
    </div>
  )
}

export default Success
