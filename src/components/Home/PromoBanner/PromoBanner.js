import styles from "./PromoBanner.module.css";
import PromoBannerImg from "../../../assets/images/promo-banner.jpg";

const PromoBanner = () => {
  return (
    <div className={styles["promo-banner"]}>
      <h2>
        Think once, think twice, think <span>laptops.</span>
      </h2>
      <img src={PromoBannerImg} alt="" class={styles["promo-banner__img"]} />
    </div>
  );
};

export default PromoBanner;
