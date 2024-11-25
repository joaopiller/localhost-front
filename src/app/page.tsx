import GreenButton from "@/components/GreenButton";
import styles from "./page.module.css";
import Image from "next/image";
import search from "../assets/icons/search.svg";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.searchSection}>
        <div className={styles.wrapper}>
          <h1>Find a <span>host</span> for everty journey</h1>
          <p>Discover the best local rental properties that fits your every travel needs</p>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Accommodation"/>
            <GreenButton>
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
