import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Title | Home </title>
        <meta name="description" content="Page Description Here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: [0.8, 1.2, 1], 
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
          className={styles.Headlines}
        >
          <h1> Wanna Grow</h1>
          <h1 className={styles.slightPush}> We got you covered</h1>
        </motion.div>
        <div className={styles.bannerism}>
          <Image
            className={styles.homePic}
            src="/homePic.png"
            width={600}
            height={400}
          />
          <a className={`${styles.btn} ${styles.btn1}`}>Select Niche </a>
          <a className={`${styles.btn} ${styles.btn2}`}>Get Started</a>
        </div>
      </section>
    </div>
  );
}
