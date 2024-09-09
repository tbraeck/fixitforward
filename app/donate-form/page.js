'use client'
import Link from 'next/link';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const DonateFormComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [product, setProduct] = useState("");
    const [brand, setBrand] = useState("");

    // const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // This prevents the default form submission
        console.log(firstName, lastName, email, phoneNumber, product, description);

        // Perform any additional form processing here

        navigate("/product"); // This navigates to the next form page
    };

    const handleReset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setProduct('');
        setBrand('');
    };

    return (
        <div className='form-page'>
            <div>
                <Link href="/">
                    <button className='back-button'>
                        BACK
                    </button>
                </Link>
            </div>
            <div className="App">
                <h1>FIX IT FORWARD</h1>
                <h2>☞ Donations ☜</h2>
                <fieldset>
                    <form className='fixitform'>
                        <label htmlFor="firstname">First Name*</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter First Name"
                            required
                        />
                        <label htmlFor="lastname">Last Name*</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter Last Name"
                            required
                        />
                        <label htmlFor="email">Enter Email*</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            required
                        />
                        <label htmlFor="phoneNumber">Phone Number*</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter phone number"
                            required
                        />
                            <label htmlFor="product">Product*</label>
                            <select 
                            id="product" 
                            name="product" 
                            required
                            onChange={(e) => setProduct(e.target.value)}
                            >
                            <option value="Television">Television</option>
                            <option value="Stereo">Stereo</option>
                            <option value="Microwave" selected>Microwave</option>
                            <option value="Blender">Blender</option>
                            <option value="Rice Cooker">Rice Cooker</option>
                            <option value="InstaPot">InstaPot</option>
                            <option value="Coffee Maker">Coffee Maker</option>
                            <option value="Mixer">Mixer</option>
                            <option value="Toaster">InstaPot</option>
                            <option value="Crock Pot">Crock Pot</option>
                            </select>

                            <label htmlFor="brand">Brand*</label>
                            <select 
                            id="brand" 
                            name="brand" 
                            required
                            onChange={(e) => setBrand(e.target.value)}
                            >
                            <option value="GE">GE</option>
                            <option value="Whirlpool">Whirlpool</option>
                            <option value="Microwave" selected>Microwave</option>
                            <option value="Blender">Blender</option>
                            <option value="Rice Cooker">Rice Cooker</option>
                            <option value="InstaPot">InstaPot</option>
                            <option value="Coffee Maker">Coffee Maker</option>
                            <option value="Mixer">Mixer</option>
                            <option value="Toaster">InstaPot</option>
                            <option value="Crock Pot">Crock Pot</option>
                            </select>
                        {/* <label htmlFor="description">Product Description*</label>
                        <input
                            type="text"
                            name="description"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter product description / what's broken?"
                            required
                        /> */}
                        <button
                            className='reset-submit-button'
                            type="reset"
                            value="reset"
                            onClick={handleReset}
                        >
                            RESET
                        </button>
                        <button
                            className='reset-submit-button'
                            type="submit"
                            value="Submit"
                            onClick={handleSubmit}
                        >
                            SUBMIT
                        </button>
                    </form>
                </fieldset>
            </div>
        </div>
    );
};

export default DonateFormComponent;
