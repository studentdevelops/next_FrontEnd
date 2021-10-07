import styles from "../styles/youtube.module.css";
import stylesUtil from "../styles/common.module.css";
import { AiOutlineArrowRight } from 'react-icons/ai';

const youtubeAds = () => {
  return (
    <div className={styles.youtube}>
      <h1>Youtube Advertisements</h1>
      <p>Image(These ads show up on top right, right above play next)</p>
      <p>Resolution 300 x 60 </p>
      <p>file type gif,jpg,png</p>
      <p>size max 150kbs</p>
      <p>length max 30 seconds</p>
      <p>OverLay Ads</p>
      <p>Resolution 480 x 70 </p>
      <p>file type Static gif,jpg,png</p>
      <p>size max 150kbs</p>
      <p>Video Ads</p>
      <p>Video Codec: H.264, MPEG-2, MPEG-4</p>
      <p>Audio Codec: AAC, MP3</p>
      <p>Resolution: 16×9 or 1080p (4:3 aspect ratio)</p>
      <p>Frame Rate: 24 – 30FPS</p>
      <p>File Size: Max. 1 GB</p>
      <p>in case of overlay one</p>
      <p>Image: 480×60 or 728×90</p>
      <p>File type: Static GIF, PNG, JPG</p>
      <p>File size: Max. 150KB</p>
      <p>incase of skipable ads</p>
      <p>Must be uploaded to YouTube</p>
      <p>Companion image specs:</p>
      <p>300×60 pixels</p>
      <p>JPG, static GIF, or PNG</p>
      <p>Follow Google’s image ad policies</p>
      <p>Max. 1KB</p>
      <p>Non Skipable Ads</p>
      <p>Must be uploaded to YouTube</p>
      <p>Companion image specs:</p>
      <p>300×60 pixels</p>
      <p>JPG, static GIF, or PNG</p>
      <p>Follow Google’s image ad policies</p>
      <p>Max. 1KB</p>
      <p>Length: Max. 15 or 20 seconds (depends on region)</p>
      <p>Bumper ads</p>
      <p>
        Must be uploaded to YouTube Companion image specs: 300×60 pixels JPG,
        static GIF, or PNG Follow Google’s image ad policies Max. 1KB Length:
        Max. 6 seconds
      </p>
      <p>Sponsored Cards</p>
      <p>
        Must be uploaded to YouTube Media: image JPG, static GIF, or PNG Aspect
        ratio 1:1 Follow Google’s image ad policies Max. 1KB Length: Max. 15 or
        20 seconds (depends on region) File Size: 2MB Maximum
      </p>
      <form action="">
        <a className={stylesUtil.btn}>Submit <AiOutlineArrowRight /></a>
      </form>
    </div>
  );
};

export default youtubeAds;
