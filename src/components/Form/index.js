import React from "react";
import cn from "classnames";
import styles from "./Form.module.sass";

const Form = ({
  className,
  onSubmit,
  name,
  email,
  setName,
  setEmail,
  isSubmitted = false,
  isLoading = false
}) => {
  return (
    <form className={cn(styles.form, className)} action="" onSubmit={onSubmit}>
      <input
        className={styles.input}
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        name={"movieName"}
        placeholder={"Movie Name"}
        required
      />
      <input
        className={styles.input}
        type={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name={"email"}
        placeholder={"Your email address"}
        required
      />

      <button disabled={isLoading || isSubmitted} className={cn(styles.btn, isSubmitted && styles.done)}>
      {!isLoading && !isSubmitted ? "Submit Query" : !isLoading && isSubmitted ? "Done" : "Please Wait" }
      </button>
    </form>
  );
};

export default Form;
