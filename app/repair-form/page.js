'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRepair } from '../context/RepairContext';

const RepairFormComponent = () => {
        const {
        companyName, setCompanyName,
        address, setAddress,
        email, setEmail,
        phoneNumber, setPhoneNumber,
        zipCode, setZipCode,
        productsAccepted, setProductsAccepted,
        typeOfRepair, setTypeOfRepair} = useRepair();    
        
        const router = useRouter();


      

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(companyName, address, "I have found the data")
        router.push('/transport-repair');
    };

    const handleReset = () => {
        setCompanyName('');
        setAddress('');
        setEmail('');
        setPhoneNumber('');
        setZipCode('');  
        setTypeOfRepair('');
    };

    const toggleProductType = (method) => {
        if (productsAccepted.includes(method)) {
            setProductsAccepted(productsAccepted.filter((item) => item !== method)); // Remove method
        } else {
            setProductsAccepted([...productsAccepted, method]); // Add method
        }
        console.log(productsAccepted    )
    };

    const toggleRepairType = (method) => {
        if (typeOfRepair.includes(method)) {
            setTypeOfRepair(typeOfRepair.filter((item) => item !== method)); // Remove method
        } else {
            setTypeOfRepair ([...typeOfRepair, method]); // Add method
        }
        console.log(typeOfRepair    )
    };

    return (
        <div className='form-page w-full'>
            <div className="back-button-container">
                <Link href="/">
                    <button className="back-button">BACK</button>
                </Link>
            </div>
            <div className="App-repair  ">
                <h1 className='form-title'>FIX IT FORWARD</h1>
                <h2 className='form-subtitle'>☞ Repair / Reseller Form ☜</h2>
                <fieldset>
                    <form className='fixitform w-full justify-center ' required>
                        <label htmlFor="companyName" className="form-label">Company Name*</label>
                        <input
                            type="text"
                            name="companyName"
                            id="companyName"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="Enter Company Name"
                            required
                            className="form-input wide-input"
                            />
                        
                        <label htmlFor="address" className="form-label">Address*</label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter Address"
                            required
                            className="form-input wide-input"
                        />
                        <label htmlFor="email" className="form-label">Email*</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            required
                            className="form-input wide-input"

                        />
                        
                        <label htmlFor="phoneNumber" className="form-label">Phone Number*</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter phone number"
                            required
                            className="form-input wide-input" 

                        />
                        
                        <label htmlFor="zipCode" className="form-label">Zip Code*</label>
                        <input
                            type="text" 
                            name="zipCode"
                            id="zipCode"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            placeholder="Enter Zip Code"
                            required
                            className="form-input wide-input" 

                        />
            
                            <div className="repair-info  flex flex-row justify-between space-x-8">
                            {/* Products Accepted */}
                            <div className="w-1/2">
                                <legend className="mt-2">Products Accepted*</legend>
                                <div className="transport-option">
                                <label>
                                    <input
                                    type="checkbox"
                                    value="Kitchen-Appliances"
                                    checked={productsAccepted.includes('Kitchen-Appliances')}
                                    onChange={() => toggleProductType('Kitchen-Appliances')}
                                    />
                                    Kitchen Appliances
                                </label>
                                </div>

                                <div className="transport-option">
                                <label>
                                    <input
                                    type="checkbox"
                                    value="Video Equipment"
                                    checked={productsAccepted.includes('Video Equipment')}
                                    onChange={() => toggleProductType('Video Equipment')}
                                    />
                                    Video Equipment
                                </label>
                                </div>

                                <div className="transport-option">
                                <label>
                                    <input
                                    type="checkbox"
                                    value="Audio Equipment"
                                    checked={productsAccepted.includes('Audio Equipment')}
                                    onChange={() => toggleProductType('Audio Equipment')}
                                    />
                                    Audio Equipment
                                </label>
                                </div>

                                <div className="transport-option">
                                <label>
                                    <input
                                    type="checkbox"
                                    value="Large Appliances"
                                    checked={productsAccepted.includes('Large Appliances')}
                                    onChange={() => toggleProductType('Large Appliances')}
                                    />
                                    Large Appliances
                                </label>
                                </div>
                            </div>

                            {/* Types of Repairs */}
                            <div className="w-1/2">
                                <legend className="mt-2">Types of Repairs*</legend>
                                <div className="transport-option">
                                <label>
                                    <input
                                    type="checkbox"
                                    value="Minor Damage"
                                    checked={typeOfRepair.includes('Minor Damage')}
                                    onChange={() => toggleRepairType('Minor Damage')}
                                    />
                                    Minor Damage
                                </label>
                                </div>

                                <div className="transport-option">
                                <label>
                                    <input
                                    type="checkbox"
                                    value="Medium Damage"
                                    checked={typeOfRepair.includes('Medium Damage')}
                                    onChange={() => toggleRepairType('Medium Damage')}
                                    />
                                    Medium Damage
                                </label>
                                </div>

                                <div className="transport-option">
                                <label>
                                    <input
                                    type="checkbox"
                                    value="Heavy Damage"
                                    checked={typeOfRepair.includes('Heavy Damage')}
                                    onChange={() => toggleRepairType('Heavy Damage')}
                                    />
                                    Heavy Damage
                                </label>
                                </div>

                                <div className="transport-option">
                                <label>
                                    <input
                                    type="checkbox"
                                    value="Full Overhaul"
                                    checked={typeOfRepair.includes('Full Overhaul')}
                                    onChange={() => toggleRepairType('Full Overhaul')}
                                    />
                                    Full Overhaul   
                                </label>
                                </div>
                            </div>
                            </div>
                        <div className="button-container">
                            <button
                                className='reset-submit-button'
                                type="reset"
                                onClick={handleReset}
                            >
                                RESET
                            </button>
                            <button
                                className='reset-submit-button'
                                type="submit"
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

export default RepairFormComponent;
