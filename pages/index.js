import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

import { fadeInUp } from "../components/animations.js"


export default function Home() {
  return (
    <motion.div className="home" initial='initial' animate='animate' exit={{opacity:0}}>
      <Head>
        <title>Title | Home </title>
        <meta name="description" content="Page Description Here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.section variants={fadeInUp}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={ fadeInUp }
          className={styles.Headlines}
        >
          <h1> Wanna Grow</h1>
          <h1 className={styles.slightPush}> We got you covered</h1>
        </motion.div>
        <div className={styles.bannerism}>
          <Image
          alt=""
            className={styles.homePic}
            src="/homePic.png"
            width={600}
            height={400}
          />
          <a className={`${styles.btn} ${styles.btn1}`}>Select Niche </a>
          <a className={`${styles.btn} ${styles.btn2}`}>Get Started</a>
        </div>
      </motion.section>
    </motion.div>
  );
}
