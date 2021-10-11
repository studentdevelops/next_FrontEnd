import styles from "../styles/About.module.css";
import { motion } from "framer-motion";

const pricing = () => {
  return (
    <motion.div initial='initial' animate='animate' exit={{opacity:0}}>
      <h1>Pricing</h1>
    </motion.div>
  );
};

export default pricing;
