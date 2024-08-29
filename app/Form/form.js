import { useState } from 'react';

const FormComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [product, setProduct] = useState("");
    const [description, setDescription] = useState("");

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
    <div className="App">
    <h1>Form in React</h1>
    <fieldset>
        <form action="#" method="get">
            <label for="firstname">
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
            <label for="phoneNumber">Enter Email* </label>
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
            <label for="product">Enter Email* </label>
            <input
                type="product"
                name="product"
                id="product"
                value={product}
                onChange={(e) =>
                    setProduct(e.target.value)
                }
                placeholder="Enter product name"
                required
            />
            <label for="description">Enter Email* </label>
            <input
                type="description"
                name="description"
                id="description"
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)
                }
                placeholder="Enter product description"
                required
            />
            <button
                type="reset"
                value="reset"
                onClick={() => handleReset()}
            >
                Reset
            </button>
            <button
                type="submit"
                value="Submit"
                onClick={(e) => handleSubmit(e)}
            >
                Submit
            </button>
        </form>
    </fieldset>
</div>
  )
}

export default FormComponent
