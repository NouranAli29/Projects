import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex gap-6 p-4">
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
        </nav>
    );
}