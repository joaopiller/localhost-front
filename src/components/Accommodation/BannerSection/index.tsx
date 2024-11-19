import styles from "./index.module.css";

export default function BannerSection({image}: {image: string}) {
    return (
        <div
            className={styles.bannerSection}
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
        </div>
    )
}