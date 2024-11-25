import Image from "next/image"
import styles from "./styles.module.css"
import GreenButton from "@/components/GreenButton"
import houseIcon from "@/assets/icons/house.svg"
import search from "@/assets/icons/search.svg"

export default function FilterForm() {
    return (
        <div className={styles.searchBar}>
            <div className={styles.searchInput}>
              <input type="text" placeholder="Accommodation"/>
              <Image
                  src={houseIcon}
                  alt="House Icon"
                  width={25}
                  height={25}
                  className={styles.inputIcon}
                />
            </div>
            <GreenButton className={styles.searchButton}>
              <Image
                src={search}
                alt="Search"
                width={20}
                height={20}
              />
              Search
            </GreenButton>
          </div>
    )
}