import styles from "./StoreGridCard.module.css";

const StoreGridCard = ({ item, addItemToCart }) => {
  const clickHandler = () => {
    addItemToCart(item.id);
  };

  return (
    <div className={styles["store-grid__card"]}>
      <img src={item.image} alt="" />
      <p>{item.description}</p>

      <span className={styles["store-grid__card-price"]}>
        {item.price} &euro;
      </span>

      <button onClick={clickHandler}>Add to cart</button>
    </div>
  );
};

export default StoreGridCard;
