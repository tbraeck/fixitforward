import Image from "next/image"

function HeaderComponent() {    
  return (        
    <header className="header">
    <Image src="/FixItForward-icon.png" width='60' height='60' alt="Company Logo" className="logo" />
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>  
  )
}
export default HeaderComponent