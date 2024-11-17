import logo from '../../assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

export default function Header() {
    return (
        <header className={styles.wrapper}>
            <div>
                <Image
                    src={logo}
                    alt="Localhost Logo"
                    width={156}
                    height={40}
                />
                <nav>
                    <Link className={styles.link} href='/'>Home</Link>
                    <Link className={styles.link} href='/sign-in'>Sign In</Link>
                </nav>
            </div>
        </header>
    )
}