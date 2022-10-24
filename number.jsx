import { useState, useCallback } from "react";
import { useNumber } from "../services/usenum";
import styles from "./indexPage.module.css";

export function NumberPage() {
  const [l, setFirst] = useState(0);
  const [r, setSecond] = useState(0);
  const [button1, setButton] = useState(0);

  const decrement = useCallback(() => {
    setButton(() => button1 + 1);
  }, [button1]);

  const data = useNumber(l, r, button1);

  return (
    <div>
      <div className={styles.customInput}>{data}</div>
      <div>
        <input
          className={styles.customInput1}
          onChange={(e) => {
            setFirst(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          className={styles.customInput1}
          onChange={(e) => {
            setSecond(e.target.value);
          }}
        />
      </div>

      <br />
      <button className={styles.customButton} onClick={decrement}>
        {" "}
        Go{" "}
      </button>
    </div>
  );
}
