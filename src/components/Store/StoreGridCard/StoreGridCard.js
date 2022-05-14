import styles from "./StoreGridCard.module.css";
import AsusTUFImg from "../../../assets/images/asus-fx706heb.webp";

const StoreGridCard = () => {
  return (
    <div className={styles["store-grid__card"]}>
      <img src={AsusTUFImg} alt="" />
      <p>
        Laptop Gaming ASUS TUF F17 FX706HEB-HX114, Intel Core i7-11800H pana la
        4.6GHz
      </p>

      <span className={styles["store-grid__card-price"]}>1399.99</span>

      <button>Add to cart</button>
    </div>
  );
};

export default StoreGridCard;
