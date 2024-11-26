import FilterSection from "@/components/FilterSection";
import styles from "./page.module.css";
import AccommodationsSection from "@/components/AccommodationsSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <FilterSection/>
      <AccommodationsSection/>
    </div>
  );
}
