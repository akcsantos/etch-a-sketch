import { useState } from "react";
import styles from "./mainContainer.module.css";

export default function MainContainer() {
  const [bg, setBg] = useState("");
  function changeBG() {
    setBg("black");
  }
  return (
    <div className={styles.mainContainer}>
      <div
        className={styles.tiles}
        style={{ backgroundColor: bg }}
        onMouseEnter={changeBG}
      ></div>
    </div>
  );
}
