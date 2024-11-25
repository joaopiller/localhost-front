'use client'
import FilterSection from "@/components/FilterSection";
import styles from "./page.module.css";
import Accommodation from "@/components/Accommodation";
import { useState } from "react";

export default function Home() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className={styles.page}>
      <FilterSection/>
      <section className={styles.accommodationsSection}>
        <div className={styles.accommodations}>
          <Accommodation
            title="Luxury Villa"
            location="Lekki, Lagos"
            price="150"
            image="https://conteudo.imguol.com.br/c/entretenimento/3a/2023/07/21/airbnb-ferias-1689983980154_v2_1x1.jpg"
          />
          <Accommodation
            title="Luxury Villa"
            location="Lekki, Lagos"
            price="150"
            image="https://conteudo.imguol.com.br/c/entretenimento/3a/2023/07/21/airbnb-ferias-1689983980154_v2_1x1.jpg"
          />
          <Accommodation
            title="Luxury Villa"
            location="Lekki, Lagos"
            price="150"
            image="https://conteudo.imguol.com.br/c/entretenimento/3a/2023/07/21/airbnb-ferias-1689983980154_v2_1x1.jpg"
          />
          <Accommodation
            title="Luxury Villa"
            location="Lekki, Lagos"
            price="150"
            image="https://conteudo.imguol.com.br/c/entretenimento/3a/2023/07/21/airbnb-ferias-1689983980154_v2_1x1.jpg"
          />
          <Accommodation
            title="Luxury Villa"
            location="Lekki, Lagos"
            price="150"
            image="https://conteudo.imguol.com.br/c/entretenimento/3a/2023/07/21/airbnb-ferias-1689983980154_v2_1x1.jpg"
          />
          <Accommodation
            title="Luxury Villa"
            location="Lekki, Lagos"
            price="150"
            image="https://conteudo.imguol.com.br/c/entretenimento/3a/2023/07/21/airbnb-ferias-1689983980154_v2_1x1.jpg"
          />
          <Accommodation
            title="Luxury Villa"
            location="Lekki, Lagos"
            price="150"
            image="https://conteudo.imguol.com.br/c/entretenimento/3a/2023/07/21/airbnb-ferias-1689983980154_v2_1x1.jpg"
          />
          <Accommodation
            title="Luxury Villa"
            location="Lekki, Lagos"
            price="150"
            image="https://conteudo.imguol.com.br/c/entretenimento/3a/2023/07/21/airbnb-ferias-1689983980154_v2_1x1.jpg"
          />
          <Accommodation
            title="Luxury Villa"
            location="Lekki, Lagos"
            price="150"
            image="https://conteudo.imguol.com.br/c/entretenimento/3a/2023/07/21/airbnb-ferias-1689983980154_v2_1x1.jpg"
          />
          <Accommodation
            title="Luxury Villa"
            location="Lekki, Lagos"
            price="150"
            image="https://conteudo.imguol.com.br/c/entretenimento/3a/2023/07/21/airbnb-ferias-1689983980154_v2_1x1.jpg"
          />
        </div>
        <button 
          className={styles.showButton} 
          onClick={() => setShowMore(!showMore)}
          style={{
            backgroundColor: showMore ? "#00C29F" : "transparent",
            color: showMore ? "#fff" : "#00C29F"
          }}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </section>
    </div>
  );
}
