import Link from "next/link";
import FooterComponent from "./Footer/footer";
import HeaderComponent from "./Header/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <div className="main-content flex-grow">
        <div className="flex justify-center items-center bg-gray">
          <Link href='/fix-it-forward'><button>Fix It Forward</button></Link>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
