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
            </div>
        </nav>
    )
}

export default NavBar;