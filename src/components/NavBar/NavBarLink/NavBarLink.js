import styles from "./NavBarLink.module.css";

const NavBarLink = (props) => {
  return (
    <li>
      <a href={props.path} className={styles["navbar__link"]}>
        {props.label}
      </a>
    </li>
  );
};

export default NavBarLink;
