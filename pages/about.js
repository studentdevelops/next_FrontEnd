import styles from "../styles/About.module.css";
import Image from "next/image";
import {motion} from "framer-motion";

const about = () => {
  return (
    <motion.div className={styles.about} initial='initial' animate='animate' exit={{opacity:0}}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta tenetur
        doloremque quaerat ipsam, autem molestiae ex suscipit eum quis accusamus
        aliquam illum nulla corporis recusandae porro dolore aliquid dolorem
        placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Deserunt totam optio eaque debitis aut, quasi fugit, dolorem, blanditiis
        harum placeat nemo. Quidem, saepe delectus ad et ratione optio minima
        facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
        impedit consequatur ullam mollitia tenetur error, et magni, debitis
        repudiandae nobis neque similique, rerum recusandae! Praesentium
        molestias dicta facilis voluptas voluptate.
      </p>
      <Image
        className={styles.img}
        src="/about_us.png"
        height={300}
        width={300}
      />
    </motion.div>
  );
};

export default about;
