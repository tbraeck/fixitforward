'use client'
import Link from 'next/link';
import { useState } from 'react';

const RepairFormComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [typeOfRepair, setTypeOfRepair] = useState("");

const handleSubmit = (e) => {
    e.preventdefault();

    console.log(firstName, lastName, email,phoneNumber, product, description )
}


const handleReset = () => {
 setFirstName('');
 setLastName('');
 setEmail('');
 setPhoneNumber('');
 setProduct('');
 setDescription('');
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
            <label for="firstName">
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
            <label for="lastname">Last Name*</label>
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
            <label for="email">Enter Email* </label>
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
            <label for="phoneNumber">Phone Number* </label>
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
            <label for="companyName">Company Name* </label>
            <input
                type="companyName"
                name="companyName"
                id="companyName"
                value={companyName}
                onChange={(e) =>
                    setCompanyName(e.target.value)
                }
                placeholder="Enter comapny name"
                required
            />
            <label for="typeOfRepair">Type of Repair* </label>
            <input
                type="typeOfRepair"
                name="typeOfRepair"
                id="typeOfRepair"
                value={typeOfRepair}
                onChange={(e) =>
                    setTypeOfRepair(e.target.value)
                }
                placeholder="Enter type of Repair"
                required
            />
            <button
                type="reset"
                value="reset"
                onClick={() => handleReset()}
            >
                RESET
            </button>
            <button
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
