import Link from "next/link";

const NavBar = () => {
    return (
        <nav>
            <div className="space-x-4">
                <Link href="/about" className="hover:underline">
                    About
                </Link>
                <Link href="/contact" className="hover:underline">
                    Contact
                </Link>
                
                <Link href="/login" className="hover:underline">
                    Login
                </Link>
                <Link href="/register" className="hover:underline">
                    Register
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;