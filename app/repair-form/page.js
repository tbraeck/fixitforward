'use client'
import Link from 'next/link';
import { useState } from 'react';

const RepairFormComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [whatTypeOfRepair, setWhatTypeOfRepair] = useState("");

const handleSubmit = (e) => {
    e.preventdefault();

    console.log(firstName, lastName, email,phoneNumber, product, description )
}


const handleReset = () => {
 setFirstName('');
 setLastName('');
 setEmail('');
 setPhoneNumber('');
 setCompanyName('');
 setWhatTypeOfRepair('');
}


  return (
    <div className='form-page'>
        <div >
        <Link href="/">
      <button className='back-button'>
        BACK
      </button>
        </Link>
        </div>
   
    <div className="App">
       
    <h1>FIX IT FORWARD</h1>
    <h2>☞ Repairs ☜</h2>
    <fieldset>
        <form action="#" method="get" className='fixitform'>
            <label htmlFor="firstName">
                First Name*
            </label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={(e) =>
                    setFirstName(e.target.value)
                }
                placeholder="Enter First Name"
                required
            />
            <label htmlFor="lastname">Last Name*</label>
            <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={(e) =>
                    setLastName(e.target.value)
                }
                placeholder="Enter Last Name"
                required
            />
            <label htmlFor="email">Enter Email* </label>
            <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
                placeholder="Enter email"
                required
            />
            <label htmlFor="phoneNumber">Phone Number* </label>
            <input
                type="phoneNumber"
                name="phoneNumber"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) =>
                    setPhoneNumber(e.target.value)
                }
                placeholder="Enter phone number"
                required
            />
            <label htmlFor="companyName">Company Name* </label>
            <input
                type="companyName"
                name="companyName"
                id="companyName"
                value={companyName}
                onChange={(e) =>
                    setCompanyName(e.target.value)
                }
                placeholder="Enter company name"
                required
            />
            <label htmlFor="whatTypeOfRepair">Type of Repair* </label>
            <input
                type="whatTypeOfRepair"
                name="whatTypeOfRepair"
                id="whatTypeOfRepair"
                value={whatTypeOfRepair}
                onChange={(e) =>
                    setWhatTypeOfRepair (e.target.value)
                }
                placeholder="Enter type of Repair"
                required
            />
             <button
                className='reset-submit-button'
                type="reset"
                value="reset"
                onClick={() => handleReset()}
            >
                RESET
            </button>
            <button
                className='reset-submit-button'
                type="submit"
                value="Submit"
                onClick={(e) => handleSubmit(e)}
            >
                SUBMIT
            </button>
        </form>
    </fieldset>
</div>
</div>
  )
}

export default RepairFormComponent
