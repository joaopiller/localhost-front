import Image from "next/image"
import styles from "./styles.module.css"
import GreenButton from "@/components/GreenButton"
import houseIcon from "@/assets/icons/house.svg"
import search from "@/assets/icons/search.svg"
import { Input } from "@/components/Input"

export default function FilterForm() {
    return (
        <div className={styles.searchBar}>
            {/* <div className={styles.searchInput}>
              <input type="text" placeholder="Accommodation"/>
              <Image
                  src={houseIcon}
                  alt="House Icon"
                  width={25}
                  height={25}
                  className={styles.inputIcon}
                />
            </div> */}
            <Input 
              type="text" 
              placeholder="Accommodation"
              icon={houseIcon}
              width="80rem"
              height="2rem"
            ></Input>
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