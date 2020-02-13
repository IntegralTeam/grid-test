import React, { FC, useEffect, useCallback, useRef } from "react";
import styles from "./styles.module.scss";

interface IProps {
  dragging: boolean;
  color: string;
}

const Cursor: FC<IProps> = ({ dragging, color }) => {
  const cursor = useRef<HTMLDivElement>(null);
  const onDrag = useCallback(
    (event: MouseEvent) => {
      const { pageX, pageY } = event;
      if (cursor.current) {
        cursor.current.style.transform = `translate(${pageX}px, ${pageY}px)`;
      }
    },
    [cursor]
  );

  useEffect(() => {
    if (!dragging) {
      return;
    }

    window.addEventListener("mousemove", onDrag);

    return () => window.removeEventListener("mousemove", onDrag);
  }, [dragging, onDrag]);

  return (
    <div
      className={styles.cursor}
      style={{ backgroundColor: color, display: dragging ? 'block' : 'none' }}
      ref={cursor}
    />
  );
};

export { Cursor };
