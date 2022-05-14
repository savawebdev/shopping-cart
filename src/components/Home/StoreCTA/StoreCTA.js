import styles from "./StoreCTA.module.css";
import { Link } from "react-router-dom";

const StoreCTA = () => {
  return (
    <div className={styles["home-brand"]}>
      <Link to="/store">Start Shopping!</Link>
    </div>
  );
};

export default StoreCTA;
