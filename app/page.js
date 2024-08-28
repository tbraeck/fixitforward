import FooterComponent from "./Footer/footer";
import HeaderComponent from "./Header/header";

export default function Home() {
  return (
    <div>
<HeaderComponent/>
<br></br>
<div className="main-content">
  Hello world!
</div>
<br></br>
<FooterComponent/>
    </div>
  );
}
