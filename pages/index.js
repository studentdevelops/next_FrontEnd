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
        <div>
          <Image
            className={styles.homePic}
            src="/homePic.svg"
            width={1000}
            height={500}
          />
          <button>Learn More</button>
          <button>Get Started</button>
        </div>
      </section>
      <section>
        <h2>Title</h2>
        <h3>Subtitle</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          eius incidunt voluptas aliquid quaerat unde maxime corrupti
          temporibus. Repellat eos hic dolor rerum eum excepturi eaque veniam
          voluptatem aliquid commodi.
        </p>
        <div>
          <p>Pictures</p>
        </div>
      </section>
    </div>
  );
}
