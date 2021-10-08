import styles from "../styles/About.module.css";
import { motion } from "framer-motion";

const pricing = () => {
  return (
    <motion.div initial='initial' animate='animate' exit={{opacity:0}}>
      <h1>Pricing</h1>
      <PricingCard title="Deploy Add" phrase="With Already Made stuff by you"/>
      <PricingCard title="Deploy ad with our help" phrase="Dont have a specific Design on Ming? Make us do it" />
    </motion.div>
  );
};

export default pricing;
