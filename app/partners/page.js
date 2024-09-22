
import Link from "next/link";

const PartnersComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
       <div className="back-button-container absolute top-0 left-0 m-4">
                <Link href="/">
                    <button className="back-button">BACK</button>
                </Link>
            </div>
      <div className="flex flex-col  w-1/4 items-center justify-right border-2 border-[#818589] bg-white p-6 opacity-90">
        <h1 className="text-black mb-4"> FixItForward Partners</h1>
        <ol className="text-[#818589]">
        
          <li>
            <h2>Rowan Pratt</h2>
            <h3>1-802-771-7422</h3>
            <h3>diam.sed@aol.couk</h3>
            <h3>Ap #510-2871 Lobortis, Av.</h3>
            <h3>7355</h3>
          </li>
          <li>
            <h2>Rowan Pratt</h2>
            <h3>1-802-771-7422</h3>
            <h3>diam.sed@aol.couk</h3>
            <h3>Ap #510-2871 Lobortis, Av.</h3>
            <h3>7355</h3>
          </li> <li>
            <h2>Rowan Pratt</h2>
            <h3>1-802-771-7422</h3>
            <h3>diam.sed@aol.couk</h3>
            <h3>Ap #510-2871 Lobortis, Av.</h3>
            <h3>7355</h3>
          </li> <li>
            <h2>Rowan Pratt</h2>
            <h3>1-802-771-7422</h3>
            <h3>diam.sed@aol.couk</h3>
            <h3>Ap #510-2871 Lobortis, Av.</h3>
            <h3>7355</h3>
          </li>
          
        </ol>
      </div>
    </div>
  );
};

export default PartnersComponent;
