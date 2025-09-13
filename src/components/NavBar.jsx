"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathName = usePathname();
    if (pathName.includes('dashboard')) return;

    return (
        <nav className="flex items-center justify-center bg-gray-200">
            <ul className="flex items-center gap-12">
                <Link href="/"><li className="cursor-pointer px- py-1">Home</li></Link>
                <Link href="/about"><li className="cursor-pointer px- py-1">About Us</li></Link>
                <Link href="/services"><li className="cursor-pointer px- py-1">Services</li></Link>
                <Link href="/contact"><li className="cursor-pointer px- py-1">Contact</li></Link>
            </ul>
        </nav>
    );
};

export default NavBar;