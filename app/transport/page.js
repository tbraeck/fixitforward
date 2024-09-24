'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { useTransport } from "../context/TransportContext";

const Transport = () => {
    const { transport, setTransport } = useTransport();
    const router = useRouter(); 
    const [previousPage, setPreviousPage] = useState(null);

    useEffect(() => {
        // Retrieve the previous page from session storage
        const prevPage = sessionStorage.getItem('previousPage');
        setPreviousPage(prevPage);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (transport === 'Drop-Off') {
            router.push('/drop-off-page'); 
        } else if (transport === 'Pick Up') {
            router.push('/pick-up-page'); 
        } else if (transport === 'Delivery Service') {
            router.push('/delivery-service-page'); 
        }
    }

    const handleBack = (e) => { 
        e.preventDefault(); 
        if (previousPage) {
            router.push(previousPage); // Go back to the page the user came from
        }
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
