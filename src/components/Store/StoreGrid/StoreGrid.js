import StoreGridCard from "../StoreGridCard/StoreGridCard";
import styles from "./StoreGrid.module.css";

const StoreGrid = () => {
  return (
    <div className={styles["store-grid"]}>
      <StoreGridCard />
      <StoreGridCard />
      <StoreGridCard />
    </div>
  );
};

export default StoreGrid;
