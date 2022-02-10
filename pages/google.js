// Google Ads
import styles from "../styles/GoogleAds.module.css";
import stylesUtil from "../styles/common.module.css";
import { motion } from "framer-motion";
import Router from "next/router";


const GoogleAds = () => {
  const onSubmit = async e => {
    e.preventDefault();
    Router.push('/niche');
  }
  return (
    <motion.div className={styles.google} initial='initial' animate='animate' exit={{opacity:0}}>
      <h1>Google Ads </h1>
      <form action="" onSubmit={onSubmit}>
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
        <button className={stylesUtil.btn}>Submit</button>
      </form>
    </motion.div>
  );
};

export default GoogleAds;
