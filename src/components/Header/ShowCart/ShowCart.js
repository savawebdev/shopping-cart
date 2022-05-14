import styles from "./ShowCart.module.css";

const ShowCart = ({ cart }) => {
  return (
    <div className={styles["show-cart"]}>
      {cart.items.length === 0 && <span>There are no items in the cart.</span>}

      {cart.items.map((item) => (
        <div className={styles["cart-item"]}>
          <span>{item.name}</span>
          <span>{item.quantity}</span>
        </div>
      ))}
    </div>
  );
};

export default ShowCart;
