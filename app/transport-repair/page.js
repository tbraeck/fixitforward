'use client';

import { useRouter } from "next/navigation";
import { useTransport } from "../context/TransportContext";

const TransportRepair = () => {
    const { transport, setTransport } = useTransport();
    const router = useRouter();

    // Initialize transport as an array if it's not already
    if (!Array.isArray(transport)) {
        setTransport([]);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (transport.length > 0) {
            console.log('Selected transport methods:', transport);

            // Perform conditional navigation based on selected transport methods
            if (transport.includes('Drop-Off')) {
                router.push('/drop-off-page'); 
            }
            if (transport.includes('Pick Up')) {
                router.push('/pick-up-page');
            }
            if (transport.includes('Delivery Service')) {
                router.push('/delivery-service-page');
            }
        } else {
            console.log('No transport method selected');
        }
    };

    const handleBack = (e) => { 
        e.preventDefault(); 
        router.push('/repair-form');
    };

    // Toggle the selected transport method when the checkbox is clicked
    const toggleTransport = (method) => {
        if (transport.includes(method)) {
            setTransport(transport.filter((item) => item !== method)); // Remove method
        } else {
            setTransport([...transport, method]); // Add method
        }
    };

    return (
        <div className='form-page'>
            <div className="form-container">
                <fieldset>
                    <form>
                        <label htmlFor="transport">How To Get Donations*</label>
                        <div className="transport-options">
                            <div className="transport-option">
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Drop-Off"
                                        checked={transport.includes('Drop-Off')}
                                        onChange={() => toggleTransport('Drop-Off')}
                                    />
                                    Drop-Off
                                </label>
                            </div>

                            <div className="transport-option">
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Pick Up"
                                        checked={transport.includes('Pick Up')}
                                        onChange={() => toggleTransport('Pick Up')}
                                    />
                                    Pick Up
                                </label>
                            </div>

                            <div className="transport-option">
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Delivery Service"
                                        checked={transport.includes('Delivery Service')}
                                        onChange={() => toggleTransport('Delivery Service')}
                                    />
                                    Delivery Service
                                </label>
                            </div>
                        </div>

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
    );
};

export default TransportRepair;
