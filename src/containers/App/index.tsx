import React, { FC, useCallback } from "react";
import styles from "./styles.module.scss";
import { Grid } from "../Grid";
import { Picker } from "../Picker";

type Props = {};

const App: FC<Props> = ({}) => {
  return (
    <div className={styles.app}>
      <Grid />
      <Picker />
    </div>
  );
};

export { App };
