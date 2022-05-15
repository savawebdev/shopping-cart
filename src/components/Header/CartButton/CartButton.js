import styles from "./CartButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartButton = ({ cart, clickHandler }) => {
  return (
    <button onClick={clickHandler} className={styles["cart-button"]}>
      <FontAwesomeIcon icon={faCartShopping} /> Cart{" "}
      <span>({cart.totalItems})</span>
    </button>
  );
};

export default CartButton;
