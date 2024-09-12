'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const Transport = () => {
    const [transport, setTransport] = useState('');
    const router = useRouter(); 

    const handleSubmit = (e) => {
        e.preventDefault(); 

        // Conditional routing based on the selected transport option
        if (transport === 'Drop-Off') {
            console.log('Redirecting to Drop-Off page');
            router.push('/drop-off-page'); 
        } else if (transport === 'Pick Up') {
            console.log('Redirecting to Pick Up page');
            router.push('/pick-up-page'); 
        } else if (transport === 'Delivery Service') {
            console.log('Redirecting to Delivery Service page');
            router.push('/delivery-service-page'); 
        } else {
            console.log('No transport method selected');
        }
    }

    const handleBack = (e) => { 
        e.preventDefault(); 
        console.log('Going back to previous page');
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
                        
                        <div className="flex flex-row">
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
