import { Inter } from "next/font/google";
import { DateAndTimeProvider } from "./context/DateAndTimeContext";
import { DonateProvider } from "./context/DonateContext";
import { ZipCodeProvider } from "./context/ZipCodeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fix It Forward",
  description: "An app to help keep consumer products in the system to promote a circular economy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap the children with ZipCodeProvider */}
        <ZipCodeProvider>
          <DateAndTimeProvider>
            <DonateProvider>
              
          {children}
          </DonateProvider>
          </DateAndTimeProvider>
        </ZipCodeProvider>
      </body>
    </html>
  );
}
