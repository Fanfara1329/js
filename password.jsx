import { useState, useCallback } from "react";
import { usePassword } from "../services/usepass";
import styles from "./indexPage.module.css";

export function PasswordPage() {
  const [cnt, setCount] = useState(0);
  const [btn, setButton] = useState(0);

  const password = useCallback(() => {
    setButton(() => btn + 1);
  }, [btn]);
  const date = usePassword(cnt, btn);
  return (
    <div>
      <div className={styles.customInput}>{date}</div>
      <p className={styles.customInput}>Count</p>
      <input
        className={styles.customInput}
        onChange={(a) => {
          setCount(a.target.value);
        }}
      />
      <br />
      <button className={styles.customButton} onClick={password}>
        Go{" "}
      </button>
    </div>
  );
}
