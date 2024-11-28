'use client';
import Accommodation from "@/components/Accommodation";
import { useState } from "react";
import styles from "./styles.module.css";

export default function AccommodationsSection() {
    const [showMore, setShowMore] = useState(false)

    return (
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
                    image="https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg"
                />
                <Accommodation
                    title="Luxury Villa"
                    location="Lekki, Lagos"
                    price="150"
                    image="https://a0.muscache.com/im/pictures/monet/Select-8069944/original/9632a602-5743-4cdc-b4c9-74211452c16f"
                />
                <Accommodation
                    title="Luxury Villa"
                    location="Lekki, Lagos"
                    price="150"
                    image="https://a0.muscache.com/im/pictures/d3b335d7-33d1-4224-addd-182ee50ee39c.jpg"
                />
                <Accommodation
                    title="Luxury Villa"
                    location="Lekki, Lagos"
                    price="150"
                    image="https://pacsafe.com/cdn/shop/articles/2017BestAirBnB_BambooBali_150DPI_RGB_e2d29f56-7400-40a3-b516-7e128e2d584f_610x.jpg?v=1617390115"
                />
                <Accommodation
                    title="Luxury Villa"
                    location="Lekki, Lagos"
                    price="150"
                    image="https://nataliasalla.com.br/wp-content/uploads/2024/06/Airbnb-103-RJ-14-scaled.jpg"
                />
                <Accommodation
                    title="Luxury Villa"
                    location="Lekki, Lagos"
                    price="150"
                    image="https://anfitrioesdealuguel.com.br/wp-content/uploads/2019/07/original-9a6703ccf352aa591ecd20fb51afb2e9.jpg"
                />
                <Accommodation
                    title="Luxury Villa"
                    location="Lekki, Lagos"
                    price="150"
                    image="https://a0.muscache.com/im/pictures/1ff6d909-5ba6-42f3-9d2c-fa2327780936.jpg"
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
    )
}