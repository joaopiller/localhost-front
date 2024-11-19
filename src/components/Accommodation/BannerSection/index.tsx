import styles from "./styles.module.css";
import Image from "next/image";
import deleteIcon from "../../../assets/icons/delete.svg";
import edit from "../../../assets/icons/edit.svg";

export default function BannerSection({image}: {image: string}) {
    return (
        <div
            className={styles.bannerSection}
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <Image
                src={edit}
                alt="Edit Icon"
                width={25}
                height={25}
                className={`${styles.iconBtn} ${styles.edit}`}
            />
            <Image
                src={deleteIcon}
                alt="Delete Icon"
                width={25}
                height={25}
                className={styles.iconBtn}
            />
        </div>
    )
}