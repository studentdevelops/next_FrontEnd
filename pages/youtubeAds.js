import styles from "../styles/youtube.module.css";
import stylesUtil from "../styles/common.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import VideoOverlay from "../components/youtube/VideoOverlay";
import VideoAd from "../components/youtube/VideoAd";
import BumperAds from "../components/youtube/BumperAds";
import SponsoredCard from "../components/youtube/SponsoredCard";
import ImageTop from "../components/youtube/imagetop";
import Router from "next/router";
import { useState } from "react";

const YoutubeAds = () => {
  const [selected, setSelected] = useState('default');

  const testing = (e) => {
    setSelected(e.target.value);
    console.log(toDisplay[selected])
  };
  const toDisplay = {
    default:"",
    ImageTopRight: <ImageTop />,
    VideoOverlay: <VideoOverlay />,
    VideoAds: <VideoAd />,
    BumperAds: <BumperAds />,
    SponsoredCards: <SponsoredCard />
  }

  const onSubmit = async e => {
    e.preventDefault();
    Router.push('/niche');
  }

  return (
    <motion.div
      className={styles.youtube}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <h1>Youtube Advertisements</h1>
      <p>
        <label htmlFor="adType">Select Ad Type </label>
        <select name="" id="adType" onChange={testing}>
          <option value="default">Select an Option</option>
          <option
            value="ImageTopRight"
            title="These ads show up on top right, right above play next"
          >
            ImageTopRight
          </option>
          <option value="VideoOverlay">Video OverLay</option>
          <option value="VideoAds">Video Ads</option>
          <option value="BumperAds">Bumper Ads</option>
          <option value="SponsoredCards">Sponsored Cards</option>
        </select>
      </p>
      { toDisplay[selected] }
      <form action="">
        <button className={stylesUtil.btn}>
          Submit <AiOutlineArrowRight />
        </button>
      </form>
    </motion.div>
  );
};

export default YoutubeAds;
