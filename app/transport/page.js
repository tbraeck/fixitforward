'use client'

import { useRouter } from "next/navigation";
import { useTransport } from "../context/TransportContext";

const Transport = () => {

const {transport, setTransport} = useTransport();

    const router = useRouter(); 
    
    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (transport === 'Drop-Off') {

            router.push('/drop-off-page'); 
            console.log('Drop-Off');
        } else if (transport === 'Pick Up') {
            router.push('/pick-up-page'); 
            console.log('Pick Up');
        } else if (transport === 'Delivery Service') {
            router.push('/delivery-service-page'); 
            console.log('Delivery');
        } else {
            console.log('No transport method selected');
        }
    }

    const handleBack = (e) => { 
        e.preventDefault(); 
        router.push('/donate-form');
    }

    const handleTransportChange = (e) => {
        setTransport(e.target.value);
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
                            onChange={handleTransportChange} 
                        >
                            <option value="">Select a method</option> {/* Default placeholder option */}
                            <option value="Drop-Off">Drop-Off</option>
                            <option value="Pick Up">Pick Up</option>
                            <option value="Delivery Service">Delivery Service</option>
                        </select>
                        
                        <div className="button-container flex flex-row">
                            <button className='back-button' onClick={handleBack}>
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

export default Transport;
