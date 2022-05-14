import styles from "./CartButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartButton = () => {
  return (
    <button class={styles["cart-button"]}>
      <FontAwesomeIcon icon={faCartShopping} /> Cart
    </button>
  );
};

export default CartButton;
