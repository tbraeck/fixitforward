'use client'

import { useRouter } from "next/navigation";


const Success = ({details}) => {
    // const [shop, setShop] = useState('')
    const router = useRouter(); 

const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log('you are going forward');
    router.push('/'); 
}

const handleBack = (e) => { 
    e.preventDefault(); 

    console.log('you are going back');
    router.push('/choose-shop');
}

  return (
    <div className='form-page'>
    <div className="App">
        <h1>Congratulations! </h1>
        <h2>You are all set to make your donation.</h2>
        <p>Here&apos;s the details of your donation for your records:</p>
        <p>{details}</p>
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
