'use client'

import Link from "next/link";
import { ContactProvider } from "./context/ContactContext";
import { DateAndTimeProvider } from "./context/DateAndTimeContext";
import { DonateProvider } from "./context/DonateContext";
import { TransportProvider } from "./context/TransportContext";
import FooterComponent from "./footer/footer";
import HeaderComponent from "./header/header";

export default function Home() {
  return (
    <DonateProvider>
      <TransportProvider>
      <DateAndTimeProvider>
        <ContactProvider>
    <div className="flex flex-col min-h-screen mr-10">  
      <HeaderComponent />
      <div className="main-content flex-grow flex justify-center items-center">
        <div className="flex flex-col justify-center items-end mr-64 w-full"> {/* Adjust this line */}
          <div className="flex justify-center items-center bg-blue mb-4"> {/* Added margin between buttons */}
            <Link href='/donate-form'>
              <button className="w-72 h-32 text-3xl">
                I Want To Donate Something
              </button>
            </Link> 
          </div>
          <div className="flex justify-center items-center bg-blue">
            <Link href='/repair-form'>
              <button className="w-72 h-32  text-3xl">
                I Want to Repair Things
              </button>
            </Link>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
    </ContactProvider>
      </DateAndTimeProvider>
      </TransportProvider>
    </DonateProvider>
  );
}
