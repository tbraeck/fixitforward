'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const ChooseShop = () => {
    const [shop, setShop] = useState('');

// const data = './data.json';
// console.log(data, 'this is the data')
    const router = useRouter(); 
// const data = data.json();
// console.log(data, "here's the data")

const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log('you are going forward');
    router.push('/success'); 
}

const handleBack = (e) => { 
    e.preventDefault(); 

    console.log('you are going back');
    router.push('/donate-form');
}

const handleFilterRepairshops = () => {


}


  return (
    <div className='form-page'>
    <div className="App">
     <fieldset>
      <form>
      <label htmlFor="shop">Choose a Shop Near You*</label>
        <select 
            id="shop" 
            name="shop" 
            value={shop}
            required
            onChange={(e) => setShop(e.target.value)}
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

export default ChooseShop
