import Image from "next/image"
import Link from "next/link"

function HeaderComponent() {    
  return (        
    <header className="header">
    <div className="flex flex-row items-center justify-between w-full">
      {/* Logo on the left */}
      <div className="flex">
        <Link href='/'>
          <Image src="/FixItForward-icon.png" width='60' height='60' alt="Company Logo" className="logo" />
        </Link>
      </div>
  
      {/* Centered "FixItForward" title */}
      <div className="flex-1 flex justify-left">
        <h1 className="font-sans hover:font-serif text-4xl text-[#888B90]">FixItForward</h1>
      </div>
  
      {/* Right-aligned navigation links */}
      <nav className="flex justify-end">
        <ul className="flex space-x-8">
          <li>
            <h1 className="font-sans hover:text-[#000000] text-[#888B90]">
              <a href="/about">About</a>
            </h1>
          </li>
          <li>
            <h1 className="font-sans hover:text-[#000000] text-[#888B90]">
              <a href="/contact">Contact</a>
            </h1>
          </li>
          <li>
            <h1 className="font-sans hover:text-[#000000] text-[#888B90]">
              <a href="/partners">Partners</a>
            </h1>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  

  )
}
export default HeaderComponent