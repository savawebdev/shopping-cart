import styles from "./Header.module.css";
import Brand from "./Brand/Brand";
import CartButton from "./CartButton/CartButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <Brand />
      <CartButton />
    </header>
  );
};

export default Header;
