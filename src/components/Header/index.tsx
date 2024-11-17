import logo from '../../assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <Image
                src={logo}
                alt="Localhost Logo"
                width={156}
                height={40}
            />
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/sign-in'>Sign In</Link>
            </nav>
        </header>
    )
}