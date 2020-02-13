import React, { FC, useCallback, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Grid } from "../Grid";
import { Picker } from "../Picker";
import { COLORS } from "~/contstants/colors";

type Props = {};

const WIDTH = 4;
const HEIGHT = 4;
const INITIAL_CELLS = [...new Array(WIDTH * HEIGHT)].fill("#ffffff");

const App: FC<Props> = ({}) => {
  const [cells, setCells] = useState(INITIAL_CELLS);
  const [dragging, setDragging] = useState(false);
  const [currentColor, setCurrentColor] = useState(COLORS[0]);

  const onDragStart = useCallback((index: number) => {
    setDragging(true);
    setCurrentColor(COLORS[index]);
  }, [setCurrentColor]);

  const onDragStop = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const onCellFill = useCallback(
    (index, color) => {
      setCells(cells.map((el, i) => (i === index ? color : el)));
    },
    [cells, setCells]
  );

  useEffect(() => {
    window.addEventListener('mouseup', onDragStop);
    return () => window.removeEventListener('mouseup', onDragStop);
  }, [dragging, onDragStop]);

  return (
    <div className={styles.app}>
      <Picker onDragStart={onDragStart} />

      <Grid
        width={WIDTH}
        height={HEIGHT}
        cells={cells}
        dragging={dragging}
        currentColor={currentColor}
        onCellFill={onCellFill}
      />
    </div>
  );
};

export { App };
