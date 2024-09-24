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
        typeOfRepair, setTypeOfRepair} = useRepair();    
        
        const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(companyName, address, "I have found the data")
        router.push('/transport');
    };

    const handleReset = () => {
        setCompanyName('');
        setAddress('');
        setEmail('');
        setPhoneNumber('');
        setZipCode('');  
        setTypeOfRepair('');
    };

    return (
        <div className='form-page w-full'>
            <div className="back-button-container">
                <Link href="/">
                    <button className="back-button">BACK</button>
                </Link>
            </div>
            <div className="App">
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
                            className="form-input wide-input" // New classname
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
                            className="form-input wide-input" // New classname

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
                            className="form-input wide-input" // New classname

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
                            className="form-input wide-input" // New classname

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
                            className="form-input wide-input" // New classname

                        />

                        {/* <div className='product-inputs'> */}
                            {/* <div className="form-group">
                                <label htmlFor="typeOfRepair" className="form-label">Type of Repair*</label>
                                <select 
                                    id="typeOfRepair" 
                                    name="typeOfRepair" 
                                    value={typeOfRepair}
                                    required
                                    multiple
                                    onChange={(e) => setTypeOfRepair(e.target.value)}
                                    className="form-select"
                                >
                                    <option value="unknown">unknown</option>
                                    <option value="Kitchen Appliances">Kitchen Appliances</option>
                                    <option value="Video Equipment">Video Equipment</option>
                                    <option value="Audio Equipment">Audio Equipment</option>
                                    <option value="Large Appliances">Large Appliances</option>
                                </select>
                            </div>   */}
                        {/* </div>   */}
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
