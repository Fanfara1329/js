import styles from "./indexPage.module.css";
import { Link } from "react-router-dom";

export function IndexPage() {
  return (
    <div>
      <Link to={"/password"} className={styles.customButton}>
        генерации пароля
      </Link>

      <br />
      <br />
      <Link to={"/number"} className={styles.customButton}>
        генерации числа
      </Link>
    </div>
  );
}
