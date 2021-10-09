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
          <select name="" id="niche">
            <option value="agriculture">agriculture</option>
            <option value="technologies">technologies</option>
            <option value="commercial">commercial</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
          </select>
        </p>
        <button className={stylesUtil.btn}>
          Submit <AiOutlineArrowRight />
        </button>
      </form>
    </div>
  );
};

export default niche;
