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
            <option value="Travelers">Travelers</option>
            <option value="Homeowners">Homeowners</option>
            <option value="Remote workers">Remote workers</option>
            <option value="Locals">Locals</option>
            <option value="PetOwners">Pet owners</option>
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
