import FilterSection from "@/components/FilterSection";
import styles from "./page.module.css";
import AccommodationsSection from "@/components/AccommodationsSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <FilterSection/>
      <AccommodationsSection/>
      <section className={styles.contactSection}>
        <div className={styles.contactTexts}>
          <h2>Contact</h2>
          <p>Contact the Localhost team for questions or assistance with your stay</p>
        </div>
        <div className={styles.contactForm}>
          <h3>Fill out the form</h3>
          <div className={styles.inputsSection}>
            <input className={styles.textInput} type="text" placeholder="Name"/>
            <input className={styles.textInput} type="email" placeholder="Email"/>
            <input className={styles.textInput} type="tel" placeholder="Phone number"/>
            <textarea className={styles.textInput} style={{height: "5.813rem"}} name="quentions" id="quentions" placeholder="Questions"></textarea>
          </div>
          <button>Send</button>
        </div>
      </section>
    </div>
  );
}
