'use client'
import Link from "next/link";
import { useState } from "react";
import { useContact } from "../context/ContactContext";

const ContactComponent = () => {
 
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    firstName, setFirstName,
    lastName, setLastName,
    phoneNumber, setPhoneNumber,
    email, setEmail,
    message, setMessage
  } =useContact();
  
 


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit has happened", message)
  //   fetch("https://formcarry.com/s/XXXXXXX", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({ email: email, message: message })
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.code === 200) {
  //         setSubmitted(true);
  //       } else {
  //         setError(res.message);
  //       }
  //     })
  //     .catch((error) => setError(error));
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // if (submitted) {
  //   return <p>We&apos;ve received your message, thank you for contacting us!</p>;
  // }
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setMessage('');


  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="back-button-container absolute top-0 left-0 m-4">
                <Link href="/">
                    <button className="back-button">BACK</button>
                </Link>
            </div>
    {/* <div className="flex flex-col w-2/4 items-center justify-right border-2 border-[#818589] bg-white p-6 opacity-90"> */}
      <form className="form-container" >
        <h1>CONTACT US</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter First Name"
          required
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          placeholder="Enter Last Name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="number"
          value={phoneNumber}
          placeholder="Enter Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border-2"
        />
        <div className="flex flex-row justify-center items-center">
        <button
            className='reset-submit-button'
            type="button"
            onClick={handleSubmit}
          >
            SEND
          </button>
          </div>
      </form>
    </div>
    // </div>
  );
}

export default ContactComponent;
