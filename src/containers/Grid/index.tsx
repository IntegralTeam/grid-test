import React, { FC, useMemo, useCallback, useEffect } from "react";
import styles from "./styles.module.scss";

interface IProps {
  width: number;
  height: number;
  cells: string[];
  dragging: boolean;
  currentColor: string;

  onCellFill: (index: number, color: string) => void;
}

const Grid: FC<IProps> = ({
  width,
  height,
  cells,
  dragging,
  currentColor,
  onCellFill
}) => {
  const onColorDrop = useCallback(
    index => () => {
      if (!dragging) {
        return;
      }

      onCellFill(index, currentColor);
    },
    [dragging, currentColor, onCellFill]
  );
  
  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${width}, 40px)`,
        gridTemplateRows: `repeat(${height}, 40px)`
      }}
    >
      {cells.map((el, i) => (
        <div
          className={styles.cell}
          onMouseUp={onColorDrop(i)}
          style={{ backgroundColor: el }}
          key={i}
        />
      ))}
    </div>
  );
};

export { Grid };
