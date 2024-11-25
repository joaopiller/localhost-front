import FilterSection from "@/components/FilterSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <FilterSection/>
    </div>
  );
}
