import FilterForm from "./FilterForm";
import styles from "./styles.module.css";

export default function FilterSection() {
    return (
      <section className={styles.searchSection}>
        <div className={styles.wrapper}>
          <h1>Find a <span>host</span> for every journey</h1>
          <p>Discover the best local rental properties that fits your every travel needs</p>
          <FilterForm/>
        </div>
      </section>
    )
}