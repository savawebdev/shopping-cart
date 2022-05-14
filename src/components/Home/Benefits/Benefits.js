import styles from "./Benefits.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faBoxOpen,
  faSackDollar,
  faLaptopMedical,
} from "@fortawesome/free-solid-svg-icons";

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles["benefits__card"]}>
        <FontAwesomeIcon icon={faTruck} size="3x" />
        <span>Free delivery</span>
      </div>

      <div className={styles["benefits__card"]}>
        <FontAwesomeIcon icon={faBoxOpen} size="3x" />
        <span>14 days return</span>
      </div>

      <div className={styles["benefits__card"]}>
        <FontAwesomeIcon icon={faSackDollar} size="3x" />
        <span>Money back</span>
      </div>

      <div className={styles["benefits__card"]}>
        <FontAwesomeIcon icon={faLaptopMedical} size="3x" />
        <span>Extra warranty</span>
      </div>
    </div>
  );
};

export default Benefits;
