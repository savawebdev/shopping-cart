import styles from "./NavBarLink.module.css";
import { Link } from "react-router-dom";

const NavBarLink = (props) => {
  return (
    <li>
      {/* <a href={props.path} className={styles["navbar__link"]}>
        {props.label}
      </a> */}

      <Link to={props.path} className={styles["navbar__link"]}>
        {props.label}
      </Link>
    </li>
  );
};

export default NavBarLink;
