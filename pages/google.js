import styles from "../styles/googleAds.module.css";
import Image from "next/image";

const googleAds = () => {
  return (
    <div className={styles.google}>
      <h1>Google Ads </h1>
      <form action="">
        <label for="name">Name</label>
        <input
          type="text"
          name=""
          id="name"
          placeholder="Enter Campaign Name"
        />
        <label for="description" title="This is the caption for your Uploads">
          Description{" "}
        </label>
        <textarea
          name=""
          id="description"
          placeholder="Your Product Description"
        ></textarea>{" "}
        <label for="file-upload">
          Select Files
        </label>
        <input id="file-upload" type="file" />
        <label for="ck" className={styles.ck}>
          <input
            title="Done Have Designs? Make us do it for you!!"
            type="checkbox"
            name=""
            id="ck"
          />
          Dont have Designs?
        </label>
        <a className={styles.btn}>Submit</a>
      </form>
    </div>
  );
};

export default googleAds;
