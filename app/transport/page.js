'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const Transport = () => {
    const [transport, setTransport] = useState('')
    const router = useRouter(); 

const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log('you are going forward');
    router.push('/choose-shop'); 
}

const handleBack = (e) => { 
    e.preventDefault(); 

    console.log('you are going back');
    router.push('/donate-form');
}

  return (
    <div className='form-page'>
    <div className="form-container">
     <fieldset>
      <form>
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
            </select>
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
                 NEXT
            </button>
            
            </div>
           
           
           
      </form>
      </fieldset>
    </div>
    </div>
  )
}

export default Transport
