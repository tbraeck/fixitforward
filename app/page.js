import Link from "next/link";
import FooterComponent from "./footer/footer";
import HeaderComponent from "./header/header";
import InstructionsModal from "./instructions_modal/InstructionsModal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <div className="main-content flex-grow flex justify-center items-center">
        <div className="flex justify-center items-center bg-blue">
          <Link href='/donate-form'>
            <button className="flex justify-center items-center w-56 text-xl">
              I Want To Donate Something
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center bg-blue">
          <Link href='/repair-form'>
            <button className="flex justify-center items-center w-56 text-xl">
              I Want to Repair Things
            </button>
          </Link>
        </div>
        <div>
              <InstructionsModal />
            </div>
      </div>
      <FooterComponent />
    </div>
  );
}
