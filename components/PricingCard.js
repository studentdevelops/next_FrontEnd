import styles from "../styles/pricingCard.module.css";
import { AiFillClockCircle } from "react-icons/ai";

const PricingCard = ({title,phrase,icon}) => {
  return (
    <div className={styles.card}>
      {icon}
      <div className={styles.content}>
        <p>{title}</p>
        <p>{ phrase }</p>
      </div>
    </div>
  );
};

PricingCard.defaultProps = {
  title : "Title",
  phrase : " lorem ipsum ",
  icon : <AiFillClockCircle size={80} />
}

export default PricingCard;
