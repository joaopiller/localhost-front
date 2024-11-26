import styles from './styles.module.css';

export function Footer(){

    return (
        <footer className={styles.wrapper}>
            <p>© 2023 Localhost, Inc. All Rights Reserved</p>
            <div>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Contact us</p>
            </div>

        </footer>
    )
}

/**
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
 */