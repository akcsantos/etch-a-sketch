import { useState } from "react";
import styles from "./mainContainer.module.css";

export default function MainContainer() {
  const [bg, setBg] = useState("");
  const [color, setColor] = useState("black");
  const [size, setSize] = useState(16);
  const [erase, setErase] = useState(false);
  const [clear, setClear] = useState(false);
  const [mode, setMode] = useState("color");

  function changeBG(e) {
    const cell = e.target;
    if (mode === "color") {
      cell.style.backgroundColor = color;
      cell.style.border = "none";
    } else if (mode === "erase") {
      cell.style.backgroundColor = "white";
    } else {
    }
  }

  function colorControl() {
    setMode("color");
  }

  function clearPad() {
    setClear(true);
    setTimeout(colorControl, 100);
  }

  function eraseControl() {
    setMode("erase");
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.controls}>
        <button onClick={colorControl}>Color</button>
        <button onClick={clearPad}>Clear</button>
        <button onClick={eraseControl}>Erase</button>
      </div>

      <div className={styles.sketchpad}>
        <div
          className={styles.tiles}
          style={{
            gridTemplateColumns: `repeat(${size}, 1fr)`,
            gridTemplateRows: `repeat(${size}, 1fr)`,
          }}
        >
          {[...Array(size ** 2)].map((_, i) => (
            <div
              className={styles.cell}
              key={crypto.randomUUID()}
              onMouseOver={changeBG}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
