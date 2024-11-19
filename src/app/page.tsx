import Accommodation from "@/components/Accommodation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Accommodation
        title="Accommodation"
        location="Bali, Indonesia"
        image="https://casaecampo.com.br/wp-content/uploads/2023/09/f0c6e919-9122-4e5c-a077-acf511924ab8.jpeg"
        price="100"
      />
    </div>
  );
}
