import styles from "./Summary.module.css";

const Summary = ({ cart }) => {
  // prettier-ignore
  const totalPrice = cart.items.reduce((sum, cur) => sum + cur.price * cur.quantity, 0)

  return (
    <div className={styles.summary}>
      <div className={styles["summary__price"]}>
        Total Price: <span>{totalPrice} &euro;</span>
      </div>

      <button className={styles["summary__btn"]}>Payment</button>
    </div>
  );
};

export default Summary;
