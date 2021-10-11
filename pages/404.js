import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div className="not-found" initial='initial' animate='animate' exit={{opacity:0}}>
      <h1>Ooooops...</h1>
      <h2>The Page cannot be found</h2>
      <p>
        Go back to the
        <Link href="/">
          <a> Homepage </a>
        </Link>
      </p>
    </motion.div>
  );
};

export default NotFound;
