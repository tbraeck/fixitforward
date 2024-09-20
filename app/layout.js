import { Inter } from "next/font/google";
import { DateAndTimeProvider } from "./context/DateAndTimeContext";
import { DonateProvider } from "./context/DonateContext";
import { TransportProvider } from "./context/TransportContext";
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
        <DonateProvider>
          <TransportProvider>
            <DateAndTimeProvider>
            
          {children}
          </DateAndTimeProvider>
          </TransportProvider>
        </DonateProvider>

      </body>
    </html>
  );
}
