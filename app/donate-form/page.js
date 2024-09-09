'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const DonateFormComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [product, setProduct] = useState("");
    const [brand, setBrand] = useState("");
    const [howBroken, setHowBroken] = useState("");

  
    const router = useRouter(); // Initialize useRouter

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Perform any additional form processing here
        console.log(firstName, lastName, email, phoneNumber, product, brand, howBroken);

        // Redirect to another page after form submission
        router.push('/transport'); // Redirect to the desired page, e.g., "/thank-you"
    };

    const handleReset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setProduct('');
        setBrand('');
        setHowBroken('');
        console.log(firstName, lastName, email, phoneNumber, product, brand, howBroken  );
    };

    return (
        <div className='form-page'>
            <div className='flex  flex-col justify-left items-left'>
            <h1>FIX IT FORWARD</h1>
            <h2>☞ Donations Form ☜</h2>
            </div>
             
            <div className="App">
                
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
                            value={product}
                            required
                            onChange={(e) => setProduct(e.target.value)}
                            >
                            <option value="unknown" >unknown</option>
                            <option value="Television">Television</option>
                            <option value="Stereo">Stereo</option>
                            <option value="Microwave" >Microwave</option>
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
                            value={brand}
                            required
                            onChange={(e) => setBrand(e.target.value)}

                            >
                            <option value="unknown" >unknown</option>
                            <option value="GE">GE</option>
                            <option value="Whirlpool">Whirlpool</option>
                            <option value="Samsung" >Samsung</option>
                            <option value="KitchenAid">KitchenAid</option>
                            <option value="Frigidaire">Frigidaire</option>
                            <option value="Maytag">Maytag</option>
                            <option value="Kenmore">Kenmore</option>
                            <option value="LG">LG</option>
                            <option value="Haier">Haier</option>
                            <option value="Panasonic">Panasonic</option>
                            </select>

                            <label htmlFor="howBroken">How Broken Is It?*</label>
                            <select 
                            id="howBroken" 
                            name="howBroken" 
                            value={howBroken}
                            required
                            onChange={(e) => setHowBroken(e.target.value)}

                            >
                            <option value="unknown" >unknown</option>
                            <option value="aLittle">A Little</option>
                            <option value="somewhat">Somewhat</option>
                            <option value="prettyBad">It&apos;s Pretty Bad</option>
                            <option value="aLittle">Wow, this thing is Super Broken!</option>
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
                            NEXT
                        </button>
                    </form>
                </fieldset>
            </div>
            <Link href="/">
                    <button className='back-button'>
                        BACK
                    </button>
                </Link>
        </div>
    );
};

export default DonateFormComponent;
