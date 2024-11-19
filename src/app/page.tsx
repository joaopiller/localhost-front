import Accommodation from "@/components/Accommodation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Accommodation image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFg9lIo9D1LEh4_4p0V9LvFk2LKj4WvjqsYw&s" title="Casinha" location="Rua Antonio, Nova Friburgo, RJ" price="100"/>
    </div>
  );
}
