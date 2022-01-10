import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Group from "./Group";
import Image from "../Image";
import Form from "../Form";
import Theme from "../Theme";

const Footers = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setTimeout(() => {
      // TODO:
      setIsSubmitted(true)
      setIsLoading(false)
    }, 3000)
  };

  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link className={styles.logo} to="/">
              <Image
                className={styles.pic}
                src="/images/logo-dark.svg"
                srcDark="/images/logo-light.svg"
                alt="Dept Agency"
              />
            </Link>
            <div className={styles.info}>The all time movie repository.</div>
            <div className={styles.version}>
              <div className={styles.details}>Dark theme</div>
              <Theme className="theme-big" />
            </div>
          </div>
          <div className={styles.col}>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>Request a trailer</div>
            <div className={styles.text}>
              Request a new trailer here
            </div>
            <Form
              className={styles.form}
              email={email}
              name={name}
              setEmail={setEmail}
              setName={setName}
              isSubmitted={isSubmitted}
              isLoading={isLoading}
              onSubmit={(e) => handleSubmit(e)}
            />
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.copyright}>
            Copyright © 2022 Dept. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
