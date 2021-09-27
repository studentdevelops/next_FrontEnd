import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Title | Home </title>
        <meta name="description" content="Page Description Here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className={styles.Headlines}>
          <h1> Wanna Grow</h1>
          <h1 className={styles.slightPush}> We got you covered</h1>
        </div>
        <div className={styles.bannerism}>
          <Image
            className={styles.homePic}
            src="/homePic.png"
            width={600}
            height={400}
          />
          {/* <input type="text" placeholder="Enter Email"/> */}
          <a className={`${styles.btn} ${styles.btn1}`}>Select Niche </a>
          <a className={`${styles.btn} ${styles.btn2}`}>Get Started</a>
        </div>
      </section>
    </div>
  );
}
