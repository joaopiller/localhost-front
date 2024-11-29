import GreenButton from '@/components/GreenButton';
import styles from './page.module.css'
import { Input } from '@/components/Input';
import user from '../../assets/user.svg'
import lock from '../../assets/lock-simple.svg'

export default function SignIn() {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.signinBox}>
            <p>Sign In</p>
            <div className={styles.signinForm}>
                <div className={styles.inputs}>
                  <Input placeholder='Email adress' type='text' height='3rem' icon={user}></Input>
                  <Input placeholder='Password' type='text' height='3rem' icon={lock}></Input>
                </div>
                <GreenButton className={styles.searchButton}>
                    Sign In
                </GreenButton>
            </div>
        </div>
      </div>
    );
}

