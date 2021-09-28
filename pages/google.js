import styles from "../styles/googleAds.module.css";
import Image from "next/image";

const googleAds = () => {
  return (
    <div className={styles.google}>
      <h1>Google Ads </h1>
      <form action="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name=""
          id="name"
          placeholder="Enter Campaign Name"
        />
        <label htmlFor="keywords">Keywords</label>
        <input
          type="text"
          name=""
          id="keywords"
          placeholder="Enter Campaign Name"
        />
        <label htmlFor="description" title="This is the caption for your Uploads">
          Description{" "}
        </label>
        <textarea
          name=""
          id="description"
          placeholder="Your Product Description"
        ></textarea>{" "}
        <label htmlFor="link">
          Link
        </label>
        <input id="link" type="text" placeholder="Enter Link" />
        <a className={styles.btn}>Submit</a>
      </form>
    </div>
  );
};

export default googleAds;
