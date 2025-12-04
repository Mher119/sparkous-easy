import styles from "./Home.module.css";
import Image from "next/image";

export default function Home() {

    return (
        <div className={styles.container}>
             
           <div className={styles.card1}>
            <Image src="/Group 59.png" alt="image" width={456} height={555}/>
            <h1 className={styles.title}>Life ametist</h1>
            <p className={styles.price}>58.000 AMD</p>
           </div>

           <div className={styles.card2}>
            <Image src="/Group 23.png" alt="image" width={456} height={555}/>
            <h1 className={styles.title}>Life ametist</h1>
            <p className={styles.price}>58.000 AMD</p>
           </div>

           <div className={styles.card3}>
            <Image src="/image 97.png" alt="image" width={456} height={555}/>
            <h1 className={styles.title}>Life ametist</h1>
            <p className={styles.price}>58.000 AMD</p>

           </div>

        </div>
    )
}

