import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

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
