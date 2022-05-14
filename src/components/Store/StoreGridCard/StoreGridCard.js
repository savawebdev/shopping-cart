import styles from "./StoreGridCard.module.css";
import AsusTUFImg from "../../../assets/images/asus-fx706heb.webp";

const StoreGridCard = ({ image, description, price }) => {
  return (
    <div className={styles["store-grid__card"]}>
      <img src={image} alt="" />
      <p>{description}</p>

      <span className={styles["store-grid__card-price"]}>{price}</span>

      <button>Add to cart</button>
    </div>
  );
};

export default StoreGridCard;
