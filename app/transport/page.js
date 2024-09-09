'use client'

import { useState } from "react"

const Transport = () => {
    const [transport, setTransport] = useState('')


  return (
    <div className="App">
     <fieldset>
      <form>
      <label htmlFor="transport">How To Transport Your Donation*</label>
        <select 
            id="transport" 
            name="transport" 
            value={transport}
            required
            onChange={(e) => setTransport(e.target.value)}
        >
                <option value="Drop-Off" >Drop-Off</option>
                <option value="Pick Up">Pick Up</option>
                <option value="Delivery Service">Delivery Service</option>
            </select>
            <button
                className='reset-submit-button'
                type="submit"
                value="Submit"
                // onClick={handleSubmit}
            >
                 NEXT
            </button>

      </form>
      </fieldset>
    </div>
  )
}

export default Transport
