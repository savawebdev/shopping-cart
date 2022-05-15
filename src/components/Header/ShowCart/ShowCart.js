import { Link } from "react-router-dom";
import styles from "./ShowCart.module.css";

const ShowCart = ({ cart, clearCart }) => {
  const totalPrice = cart.items.reduce(
    (sum, cur) => sum + cur.price * cur.quantity,
    0
  );

  return (
    <div className={styles["show-cart"]}>
      {cart.items.length === 0 && <span>There are no items in the cart.</span>}

      {cart.items.map((item) => (
        <div className={styles["cart-item"]}>
          <span className={styles["cart-item__name"]}>{item.name}</span>
          <span className={styles["cart-item__quantity"]}>
            x{item.quantity}
          </span>
          <span className={styles["cart-item__price"]}>
            {item.price * item.quantity} &euro;
          </span>
        </div>
      ))}

      {cart.items.length !== 0 && (
        <>
          <div className={styles["cart-total"]}>
            Total Price:
            <span> {totalPrice} &euro;</span>
          </div>

          <div className={styles.actions}>
            <Link to="/cart">
              <button
                className={`${styles["actions__btn"]} ${styles["go-to-cart"]}`}
              >
                Go to cart
              </button>
            </Link>

            <button
              className={`${styles["actions__btn"]} ${styles["clear-cart"]}`}
              onClick={clearCart}
            >
              Clear cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShowCart;
