'use client'
import { useState } from "react";
import BackButton from "../pages/BackButton";

const ContactComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      
    
      const [submitted, setSubmitted] = useState(false);
      const [error, setError] = useState("");
    
      function submit(e) {
        // This will prevent page refresh
        e.preventDefault();
    
        // replace this with your own unique endpoint URL
        fetch("https://formcarry.com/s/XXXXXXX", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({ email: email, message: message })
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.code === 200) {
              setSubmitted(true);
            } else {
              setError(res.message);
            }
          })
          .catch((error) => setError(error));
      }
    
      if (error) {
        return <p>{error}</p>;
      }
    
      if (submitted) {
        return <p>We&#39;ve received your message, thank you for contacting us!</p>;
      }
    
      return (
        <div>
        <form className="App" onSubmit={submit}>
            <h1>CONTACT US</h1>
            <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="lastName"
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
          />
    
          <button type="submit">Send</button>
        </form>
        <BackButton/>
        </div>
    
  )
}

export default ContactComponent
