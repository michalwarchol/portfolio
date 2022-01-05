import React from "react";
import { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  textarea?: boolean;
};

type TextareaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  textarea?: boolean;
};

const Input: React.FC<InputProps | TextareaProps> = ({
  textarea,
  ...props
}) => {
  return (
    <div className={styles.inputDiv}>
      {textarea ? (
        <textarea {...(props as TextareaProps)}></textarea>
      ) : (
        <input {...(props as InputProps)} />
      )}
      <div className={styles.line}></div>
    </div>
  );
};
export default Input;
