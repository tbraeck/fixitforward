import Link from "next/link";
import FooterComponent from "./footer/footer";
import HeaderComponent from "./header/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <div className="main-content flex-grow">
        <div className="flex justify-center items-center bg-gray">
          <Link href='/form'><button>Fix It Forward</button></Link>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
