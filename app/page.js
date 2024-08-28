import FooterComponent from "./Footer/footer";
import HeaderComponent from "./Header/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <div className="main-content flex-grow">
        Hello world!
      </div>
      <FooterComponent />
    </div>
  );
}
