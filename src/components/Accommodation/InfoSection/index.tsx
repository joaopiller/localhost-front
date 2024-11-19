import styles from "./index.module.css";

interface InfoSectionProps {
    title: string;
    location: string;
    price: string;
}

export default function InfoSection({title, location, price}: InfoSectionProps) {
    return (
        <div className={styles.infoSection}>
            <div>
                <h3>{title}</h3>
                <p>{location}</p>
            </div>
            <div className={styles.price}>
                <span>{price}</span>
                <span>/night</span>
            </div>
        </div>
    )
}