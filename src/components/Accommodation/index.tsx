import styles from "./index.module.css";

interface AccommodationProps {
    image: string,
    title: string,
    location: string,
    price: string
}

export default function Accommodation({image, title, location, price}: AccommodationProps) {
    return (
        <div className={styles.wrapper}>
            <div
                className={styles.bannerSection}
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
            </div>
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
        </div>
    )
}