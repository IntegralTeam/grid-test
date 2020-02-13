import React, { FC, useEffect } from "react";
import styles from "./styles.module.scss";
import { COLORS } from "~/contstants/colors";

interface IProps {
  onDragStart: (colorIndex: number) => void;
}

const Picker: FC<IProps> = ({ onDragStart }) => {
  return (
    <div className={styles.picker}>
      {COLORS.map((color, i) => (
        <div
          className={styles.color}
          style={{ backgroundColor: color }}
          onMouseDown={() => onDragStart(i)}
          key={color}
        />
      ))}
    </div>
  );
};

export { Picker };
