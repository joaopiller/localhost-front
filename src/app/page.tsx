import styles from "./page.module.css";
import example from "../assets/acommodation.jpg";

export default function Home() {
  return (
    <div style={{backgroundColor: 'gray', height: '1000px', display: 'flex', justifyContent:'center', alignItems:'center'}}>
      <div className={styles.wrapper}>
        <div
          className={styles.bannerSection}
          style={{
            backgroundImage: `url(${example.src})`,
          }}
        >
        </div>
        <div className={styles.infoSection}>
          <div>
            <h3>Urban Loft</h3>
            <p>Giorgina Bay, Ontario, California</p>
          </div>
          <div className={styles.price}>
            <span>$404</span>
            <span>/night</span>
          </div>
        </div>
      </div>
    </div>
  );
}
