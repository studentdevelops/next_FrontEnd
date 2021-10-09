import styles from "../styles/instagramAds.module.css";
import stylesUtil from "../styles/common.module.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { motion } from "framer-motion";
import { useRouter } from "next/router";


const facebookAds = () => {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();
    router.push('/niche');
  }

  return (
    <motion.div className={ styles.instagram } initial='initial' animate='animate' exit={{opacity:0}}>
      <form action="" onSubmit={onSubmit}>
        <h1>Facebook Ads Performance</h1>
        <p>objective</p>
        <p>Campaign Name</p>
        <p>
          {" "}
          <select>
            <option value="Earth">Earth</option>
            <option value="Earth">Earth</option>
            <option value="Earth">Earth</option>
            <option value="Earth">Earth</option>
          </select>
        </p>
        <p>
          <label htmlFor="ageStart">Target Age Start 0 to 100</label>
          <input type="number" name="" id="ageStart" /> <br />
          <label htmlFor="End">Target Age End start to 100</label>
          <input type="number" name="" id="ageEnd" />
        </p>
        <p>
          <label htmlFor="gender">Gender </label>
          <select name="" id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </p>

        <p>Behavior</p>
        <p>Connection</p>
        <p>
          <label htmlFor="mPlacement">Mobile Placement </label>
          <select name="" id="mPlacement">
            <option value="News Feed">News Feed</option>
          </select>
        </p>
        <p>
          <select name="" id="dPlacement">
            <option value="News Feed">News Feed</option>
            <option value="Right Column">Right Column</option>
          </select>
        </p>
        <p>Excluded Connection</p>
        <p>Daily Budget</p>
        <p>
          <label htmlFor="startToday">Start Today??</label>
          <input type="checkbox" name="" id="startToday" />
        </p>
        <p>
          <label htmlFor="startDate">Select a start Date and Time </label>
          <input type="datetime" name="" id="startDate" /><br />
          <label htmlFor="endDate">Select a End Date and Time</label>
          <input type="datetime" name="" id="endDate" />
        </p>
        <p>
          <label htmlFor="oldPost">Use an Old Post? </label>
          <input type="checkbox" name="" id="oldPost" />
        </p>
        <p>
          While Creating New One: Select Size Carousel/single image/single
          video/slideshow/canvas{" "}
        </p>
        <p>
          {" "}
          vid format: .mov,.mp4, resolution: minimum 720p, max size : 2.30gb,
          max time: 60mins, max time insta: 60 seconds{" "}
        </p>
        <p>select ad placement</p>
        <p>
          ad recommendations: Increase brand awareness campaigns (including
          Reach & Frequency buying): Facebook and Instagram Boost your posts
          (including Reach & Frequency buying): Facebook and Instagram Get video
          views (including Reach & Frequency buying): Facebook and Instagram Get
          installs of your app: Facebook and Instagram Increase engagement in
          your app: Facebook Promote a product catalog: Facebook Increase
          conversions on your website: Facebook Send people to your website:
          Facebook
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

        <button className={stylesUtil.btn}>
          Submit <AiOutlineArrowRight />
        </button>
      </form>
    </motion.div>
  );
};

export default facebookAds;