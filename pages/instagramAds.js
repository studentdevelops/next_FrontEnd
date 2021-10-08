import styles from "../styles/instagramAds.module.css";
import stylesUtil from "../styles/common.module.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { motion } from "framer-motion";

const facebookAds = () => {
  return (
    <motion.div className={ styles.instagram } initial='initial' animate='animate' exit={{opacity:0}}>
      
      <h1>Instagram Ads Performance</h1>
      <p>objective</p>
      <p>Campaign Name</p>
      <p>Location</p>
      <p>Age range</p>
      <p>Gender</p>
      <p>Behavior</p>
      <p>Connection</p>
      <p>Mobile Placement: News Feed</p>
      <p>Desktop Placement: News Feed or Right Column</p>
      <p>Excluded Connection</p>
      <p>Daily Budget</p>
      <p>Run my advert from starting today</p>
      <p>Provide A start and end date including time</p>
      <p>Upload a Post or use an existing one</p>
      <p>
        While Creating New One: Select Size Carousel/single image/single
        video/slideshow/canvas{" "}
      </p>
      <p>
        {" "}
        vid format: .mov,.mp4, resolution: minimum 720p, max size : 2.30gb, max
        time: 60mins, max time insta: 60 seconds{" "}
      </p>
      <p>select ad placement</p>
      <p>
        ad recommendations: Increase brand awareness campaigns (including Reach
        & Frequency buying): Facebook and Instagram Boost your posts (including
        Reach & Frequency buying): Facebook and Instagram Get video views
        (including Reach & Frequency buying): Facebook and Instagram Get
        installs of your app: Facebook and Instagram Increase engagement in your
        app: Facebook Promote a product catalog: Facebook Increase conversions
        on your website: Facebook Send people to your website: Facebook
      </p>
      <p>place order</p>
      <p>
        approx results: Page Likes – $0.57 per like Clicks to the Buffer for
        Business landing page – $4.01 per click Boosted post – $6.35 per
        additional 1,000 people reached Page Likes – 9 likes per day Clicks to
        the Buffer homepage – 1 per day Boosted post – 787 new people reached
      </p>
      <p>
        Location: United States Interests: Social media Excluded: People who
        already like Buffer Age: 18-65+ Language: English (US)
      </p>
      <form action="">
        <button className={stylesUtil.btn}>Submit <AiOutlineArrowRight /></button>
      </form>
    </motion.div>
  );
};

export default facebookAds;