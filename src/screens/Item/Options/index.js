import React from "react";
import cn from "classnames";
import styles from "./Options.module.sass";
import Icon from "../../../components/Icon";
import Actions from "../../../components/Actions";

const Options = ({ className, items }) => {
  return (
    <div className={cn(styles.options, className)}>
      <Actions className={styles.actions} />
    </div>
  );
};

export default Options;
