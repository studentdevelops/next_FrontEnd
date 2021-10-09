import styles from "../styles/niche.module.css";
import stylesUtil from "../styles/common.module.css";
import { AiOutlineArrowRight } from 'react-icons/ai';

const niche = () => {
  return (
    <div className={styles.niche}>
      <form action="">
        <h2>Budget</h2>
        <p>
          <label htmlFor="niche">Enter Your Budget</label>
          <input type="number" name="" id="niche" />
        </p>
        <button className={stylesUtil.btn}>
          Submit <AiOutlineArrowRight />
        </button>
      </form>
    </div>
  );
};

export default niche;
