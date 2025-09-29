import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../styles/globals.css";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (

    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>


  );
}
