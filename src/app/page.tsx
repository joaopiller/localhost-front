import GreenButton from "@/components/GreenButton";
import styles from "./page.module.css";
import Image from "next/image";
import search from "../assets/icons/search.svg";
import houseIcon from "../assets/icons/house.svg";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.searchSection}>
        <div className={styles.wrapper}>
          <h1>Find a <span>host</span> for every journey</h1>
          <p>Discover the best local rental properties that fits your every travel needs</p>
          <div className={styles.searchBar}>
            <div className={styles.searchInput}>
              <input type="text" placeholder="Accommodation"/>
              <Image
                  src={houseIcon}
                  alt="House Icon"
                  width={25}
                  height={25}
                  className={styles.inputIcon}
                />
            </div>
            <GreenButton className={styles.searchButton}>
              <Image
                src={search}
                alt="Search"
                width={20}
                height={20}
              />
              Search
            </GreenButton>
          </div>
        </div>
      </section>
    </div>
  );
}
