import { useState } from "react";
import styles from "./styles.module.scss";

function App() {
  const [num, setNum] = useState("0");
  const [isOp, setIsOp] = useState(false);
  const [isPoint, setIsPoint] = useState(false);

  const numClick = (event) => {
    const { value } = event.target;
    setNum((prev) => prev + value);
    setIsOp(false);
  };
  const opClick = (event) => {
    if (!isOp) {
      const { value } = event.target;
      setNum((prev) => prev + value);
      setIsOp(true);
      setIsPoint(false);
    }
  };
  const pointClick = (event) => {
    if (!isPoint) {
      const { value } = event.target;
      setNum((prev) => prev + value);
      setIsPoint(true);
    }
  };
  const totalClick = () => {
    if (isOp) {
      setNum(() => "Error!");
    } else {
      setNum((prev) => eval(num));
      setIsPoint(false);
    }
  };
  const deleteClick = () => {
    if (num.endsWith(".")) {
      setIsPoint(false);
    }
    setNum((prev) => prev.slice(0, -1));
  };
  const resetCilck = () => {
    setNum("");
    setIsPoint(false);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <input
          readOnly
          id="screen"
          className={styles.screen}
          type="String"
          placeholder="Number"
          required
          value={num}
        ></input>
      </div>
      <div className={styles.btn__wrapper}>
        <button
          onClick={resetCilck}
          className={`${styles.btn} ${styles.btn__right_gray}`}
        >
          C
        </button>
        <button value="%" className={`${styles.btn} ${styles.btn__right_gray}`}>
          %
        </button>
        <button
          onClick={deleteClick}
          className={`${styles.btn} ${styles.btn__right_gray}`}
        >
          Del
        </button>
        <button
          onClick={opClick}
          value="/"
          className={`${styles.btn} ${styles.btn__orange}`}
        >
          ÷
        </button>
        <button
          onClick={numClick}
          value="7"
          className={`${styles.btn} ${styles.btn__deep_gray}`}
        >
          7
        </button>
        <button
          onClick={numClick}
          value="8"
          className={`${styles.btn} ${styles.btn__deep_gray}`}
        >
          8
        </button>
        <button
          onClick={numClick}
          value="9"
          className={`${styles.btn} ${styles.btn__deep_gray}`}
        >
          9
        </button>
        <button
          onClick={opClick}
          value="*"
          className={`${styles.btn} ${styles.btn__orange}`}
        >
          x
        </button>
        <button
          onClick={numClick}
          value="4"
          className={`${styles.btn} ${styles.btn__deep_gray}`}
        >
          4
        </button>
        <button
          onClick={numClick}
          value="5"
          className={`${styles.btn} ${styles.btn__deep_gray}`}
        >
          5
        </button>
        <button
          onClick={numClick}
          value="6"
          className={`${styles.btn} ${styles.btn__deep_gray}`}
        >
          6
        </button>
        <button
          onClick={opClick}
          value="-"
          className={`${styles.btn} ${styles.btn__orange}`}
        >
          -
        </button>
        <button
          onClick={numClick}
          value="1"
          className={`${styles.btn} ${styles.btn__deep_gray}`}
        >
          1
        </button>
        <button
          onClick={numClick}
          value="2"
          className={`${styles.btn} ${styles.btn__deep_gray}`}
        >
          2
        </button>
        <button
          onClick={numClick}
          value="3"
          className={`${styles.btn} ${styles.btn__deep_gray}`}
        >
          3
        </button>
        <button
          onClick={opClick}
          value="+"
          className={`${styles.btn} ${styles.btn__orange}`}
        >
          +
        </button>
        <button
          onClick={numClick}
          value="0"
          className={`${styles.btn} ${styles.zero} ${styles.btn__deep_gray}`}
        >
          0
        </button>
        <button
          onClick={pointClick}
          value="."
          className={`${styles.btn} ${styles.btn__deep_gray}`}
        >
          .
        </button>
        <button
          onClick={totalClick}
          className={`${styles.btn} ${styles.btn__orange}`}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
