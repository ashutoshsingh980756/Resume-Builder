import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../styles/globals.css";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto p-4">
          <h1>Welcome to auth Section</h1>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
