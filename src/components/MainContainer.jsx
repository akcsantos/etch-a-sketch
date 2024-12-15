import { useState } from "react";
import styles from "./mainContainer.module.css";

export default function MainContainer() {
  const [bg, setBg] = useState("");
  const [size, setSize] = useState(16);

  function changeBG(e) {
    e.target.style.backgroundColor = "black";
    e.target.style.border = "none";
  }

  return (
    <div className={styles.mainContainer}>
      <div
        className={styles.tiles}
        style={{
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          gridTemplateRows: `repeat(${size}, 1fr)`,
        }}
        onMouseEnter={changeBG}
      >
        {[...Array(size ** 2)].map((_, i) => (
          <div
            className={styles.cell}
            key={crypto.randomUUID()}
            onMouseEnter={changeBG}
          />
        ))}
      </div>
    </div>
  );
}
