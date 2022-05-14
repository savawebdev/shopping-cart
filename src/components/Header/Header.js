import styles from "./Header.module.css";
import Brand from "./Brand/Brand";
import CartButton from "./CartButton/CartButton";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Brand />
      <CartButton cart={props.cart} />
    </header>
  );
};

export default Header;
