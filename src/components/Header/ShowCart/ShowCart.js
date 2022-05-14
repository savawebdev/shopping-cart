import styles from "./ShowCart.module.css";

const ShowCart = ({ cart }) => {
  return (
    <div className={styles["show-cart"]}>
      {cart.items.length === 0 && <span>There are no items in the cart.</span>}

      {cart.items.map((item) => (
        <div className={styles["cart-item"]}>
          <span>{item.name}</span>
          <span>x{item.quantity}</span>
          <span>{item.price * item.quantity} &euro;</span>
        </div>
      ))}

      {cart.items.length !== 0 && (
        <div className={styles["cart-total"]}>
          {cart.items.reduce((sum, cur) => sum + cur.price * cur.quantity, 0)}
        </div>
      )}
    </div>
  );
};

export default ShowCart;
