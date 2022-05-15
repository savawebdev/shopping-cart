import styles from "./CartCard.module.css";

const CartCard = ({ item, removeItemFromCart, manageQuantity }) => {
  const removeItemHandler = () => {
    removeItemFromCart(item.id);
  };

  const quantityHandler = (e) => {
    manageQuantity(item.id, e.target.textContent);
  };

  return (
    <div className={styles["cart-card"]}>
      <img src={item.image} alt="" />

      <div className={styles["cart-card__info"]}>
        <p>{item.description}</p>

        <div className={styles["cart-card__quant"]}>
          <button
            className={styles["cart-card__quant-btn"]}
            onClick={quantityHandler}
          >
            -
          </button>

          <span> {item.quantity} </span>

          <button
            className={styles["cart-card__quant-btn"]}
            onClick={quantityHandler}
          >
            +
          </button>
        </div>

        <span className={styles["cart-card__price"]}>
          {item.price * item.quantity} &euro;
        </span>

        <button
          className={styles["cart-card__remove-btn"]}
          onClick={removeItemHandler}
        >
          Remove item from cart
        </button>
      </div>
    </div>
  );
};

export default CartCard;
