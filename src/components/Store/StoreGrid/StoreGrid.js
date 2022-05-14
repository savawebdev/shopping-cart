import StoreGridCard from "../StoreGridCard/StoreGridCard";
import styles from "./StoreGrid.module.css";

const StoreGrid = (props) => {
  return (
    <div className={styles["store-grid"]}>
      {props.items.map((item) => (
        <StoreGridCard item={item} addItemToCart={props.addItemToCart} />
      ))}
    </div>
  );
};

export default StoreGrid;
