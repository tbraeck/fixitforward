import Image from "next/image"
import Link from "next/link"

function HeaderComponent() {    
  return (        
    <header className="header">
      <div className="flex flex-row"><Link href='/'><Image src="/FixItForward-icon.png" width='60' height='60' alt="Company Logo" className="logo" /></Link>
      <h1 className="font-sans hover:font-serif text-4xl ml-4 text-[#888B90] justify-center items-center">FixItForward</h1></div>
    
    <nav>
        <ul>
            {/* <li><a href="/">Home</a></li> */}
            <li><h1><a href="/about">About</a></h1></li>
            <li><h1><a href="/contact">Contact</a></h1></li>
            <li><h1><a href="/partners">Partners</a></h1></li>
        </ul>
    </nav>
</header>  
  )
}
export default HeaderComponent