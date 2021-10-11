import styles from "../styles/influencer.module.css";
import stylesUtil from "../styles/common.module.css";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

const Influencer = () => {
  return (
    <motion.div className={styles.influencer} initial='initial' animate='animate' exit={{opacity:0}}>
      <h1>Influencer</h1>
      <form action="">
        <button className={stylesUtil.btn}>Submit <AiOutlineArrowRight /></button>
      </form>
    </motion.div>
  );
};

export default Influencer;
