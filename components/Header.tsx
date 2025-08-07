import Link from "next/link";
import Image from "next/image";
import logo from "../public/resumind.svg";
import NavBar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-3  shadow-md">
      <Link href="/">
        <Image src={logo} alt="resumind logo" width={150} height={50} />
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
