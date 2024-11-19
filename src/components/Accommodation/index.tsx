import BannerSection from "./BannerSection";
import styles from "./index.module.css";
import InfoSection from "./InfoSection";

interface AccommodationProps {
    image: string;
    title: string;
    location: string;
    price: string;
}

export default function Accommodation({image, title, location, price}: AccommodationProps) {
    return (
        <div className={styles.wrapper}>
            <BannerSection image={image} />
            <InfoSection title={title} location={location} price={price} />
        </div>
    )
}