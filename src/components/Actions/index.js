import React, { useState } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Actions.module.sass";
import Icon from "../Icon";

const Actions = ({ className }) => {
  const [visible, setVisible] = useState(false);

  const items = [
    {
      title: "Share on facebook",
      icon: "facebook",
      url: `https://www.facebook.com/sharer.php?u=${window.location}`
    },
    {
      title: "Share on twitter",
      icon: "twitter",
      url: `https://twitter.com/intent/tweet?url=${window.location}`
    }
  ];

  return (
    <>
      <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
        <div
          className={cn(styles.actions, className, {
            [styles.active]: visible,
          })}
        >
          <button
            className={cn("button-circle-stroke", styles.button)}
            onClick={() => setVisible(!visible)}
          >
            <Icon name="share" size="24" />
          </button>
          <div className={styles.body}>
            {items.map((x, index) => (
              <a className={styles.item} key={index} href={x.url} target={"_blank"}>
                <Icon name={x.icon} size="20" />
                <span>{x.title}</span>
              </a>
            ))}
          </div>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default Actions;
