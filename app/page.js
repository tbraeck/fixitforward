import Link from "next/link";
import FooterComponent from "./footer/footer";
import HeaderComponent from "./header/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">  
      <HeaderComponent />
      <div className="main-content flex-grow flex justify-center items-center">
        <div className="">
        <div className="flex justify-center items-center bg-blue">
          <Link href='/donate-form'>
            <button className="flex justify-center items-center w-72 h-32 text-xl">
             {/* <InstructionsModal>I Want To Donate Something</InstructionsModal>  */}
              I Want To Donate Something
            </button>
          </Link> 
        </div>
        <div className="flex justify-center items-center bg-blue">
          <Link href='/repair-form'>
            <button className="flex justify-center items-center w-72 h-32  text-xl">
              I Want to Repair Things
            </button>
          </Link>
        </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
