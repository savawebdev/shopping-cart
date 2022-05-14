import StoreGridCard from "../StoreGridCard/StoreGridCard";
import styles from "./StoreGrid.module.css";

const StoreGrid = (props) => {
  return (
    <div className={styles["store-grid"]}>
      {props.items.map((item) => (
        <StoreGridCard
          image={item.image}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default StoreGrid;
