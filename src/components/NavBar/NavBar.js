import styles from "./NavBar.module.css";
import NavBarLink from "./NavBarLink/NavBarLink";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar__links"]}>
        <NavBarLink path="/" label="Home" />
        <NavBarLink path="/store" label="Store" />
      </ul>
    </nav>
  );
};

export default NavBar;
