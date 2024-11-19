import styles from './styles.module.css';

export default function GreenButton({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <button className={`${styles.wrapper} ${className}`}>{children}</button>
    )
}