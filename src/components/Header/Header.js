import { useState } from "react";
import styles from "./Header.module.css";
import Brand from "./Brand/Brand";
import CartButton from "./CartButton/CartButton";
import ShowCart from "./ShowCart/ShowCart";

const Header = (props) => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Brand />
      <CartButton cart={props.cart} clickHandler={handleShowCart} />
      {showCart && <ShowCart cart={props.cart} clearCart={props.clearCart} />}
    </header>
  );
};

export default Header;
