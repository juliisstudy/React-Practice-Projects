import classes from "./styles.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className={classes.header}>
      <ul>
        <Link to={"/"}>
          <li>home</li>
        </Link>
        <Link to={"/add-blog"}>
          <li>add blog</li>
        </Link>
      </ul>
    </div>
  );
}
